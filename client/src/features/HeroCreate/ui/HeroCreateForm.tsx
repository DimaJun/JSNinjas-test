import { Save } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { CreateHeroFormChange, CreateHeroFormData } from '../model/types/create';
import { useCreateHeroMutation } from '../api/hero';

import s from './HeroCreateForm.module.scss';
import { FormMainInfo } from './FormMainInfo/FormMainInfo';
import { FormStory } from './FormStory/FormStory';
import { FormPowers } from './FormPowers/FormPowers';
import { FormPhotos } from './FormPhotos/FormPhotos';

import { Button } from '@/shared/ui/Button';

export function HeroCreateForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<CreateHeroFormData>({
		nickname: '',
		realName: '',
		catchPhrase: '',
		originDescription: '',
		superpowers: [],
		images: [],
	});

	const handleChange: CreateHeroFormChange = (field, value) => {
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
			<FormMainInfo
				nickname={formData.nickname}
				realName={formData.realName}
				catchPhrase={formData.catchPhrase}
				onChange={handleChange}
			/>
			<FormStory
				story={formData.originDescription}
				onChange={handleChange}
			/>
			<FormPowers
				powers={formData.superpowers}
				onChange={handleChange}
			/>
			<FormPhotos
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
