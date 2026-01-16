import { Save } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { CreateHeroFormData } from '../../model/types/hero';

import { HeroFormMain } from './HeroFormMain/HeroFormMain';
import { HeroFormStory } from './HeroFormStory/HeroFormStory';
import { HeroFormPowers } from './HeroFormPowers/HeroFormPowers';
import { HeroFormPhotos } from './HeroFormPhotos/HeroFormPhotos';
import s from './HeroForm.module.scss';

import { Button } from '@/shared/ui/Button';
import { useCreateHeroMutation } from '@/entities/Hero/api/heroes';

export type HeroFormChange = <K extends keyof CreateHeroFormData>(
	field: K,
	value: CreateHeroFormData[K]
) => void;

export function HeroForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<CreateHeroFormData>({
		nickname: '',
		realName: '',
		catchPhrase: '',
		originDescription: '',
		superpowers: [],
		images: [],
	});

	const handleChange: HeroFormChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const [createHero] = useCreateHeroMutation();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const fd = new FormData();
		fd.append('nickname', formData.nickname);
		fd.append('realName', formData.realName);
		fd.append('catchPhrase', formData.catchPhrase);
		fd.append('originDescription', formData.originDescription);
		formData.superpowers.forEach((sp) => fd.append('superpowers', sp));
		formData.images.forEach((img) => fd.append('images', img));

		try {
			const hero = await createHero(fd).unwrap();
			navigate(`/hero/${hero.id}`);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	return (
		<form
			className={s.form}
			onSubmit={handleSubmit}
		>
			<HeroFormMain
				nickname={formData.nickname}
				realName={formData.realName}
				catchPhrase={formData.catchPhrase}
				onChange={handleChange}
			/>
			<HeroFormStory
				story={formData.originDescription}
				onChange={handleChange}
			/>
			<HeroFormPowers
				powers={formData.superpowers}
				onChange={handleChange}
			/>
			<HeroFormPhotos
				images={formData.images}
				onChange={(files: File[]) => handleChange('images', files)}
			/>
			<div className={s.btns}>
				<Button
					className={s.cancel}
					onClick={() => navigate('/')}
				>
					Cancel
				</Button>
				<Button
					className={s.create}
					Icon={Save}
					type='submit'
				>
					Create hero
				</Button>
			</div>
		</form>
	);
}
