import { useNavigate } from 'react-router';
import { FormEvent, useEffect, useState } from 'react';
import { Save } from 'lucide-react';

import { EditHeroFormChange, EditHeroFormData } from '../model/types/edit';
import { useUpdateHeroMutation } from '../api/hero';

import s from './HeroEditForm.module.scss';
import { HeroEditPhotos } from './FormEditPhotos/FormEditPhotos';

import { Button } from '@/shared/ui/Button';
import { Hero } from '@/entities/Hero';
import { FormMainInfo, FormPowers, FormStory } from '@/features/HeroCreate';

interface HeroEditFormProps {
	hero: Hero;
}

export function HeroEditForm(props: HeroEditFormProps) {
	const { hero } = props;

	const navigate = useNavigate();
	const [formData, setFormData] = useState<EditHeroFormData>({
		nickname: hero.nickname || '',
		realName: hero.realName || '',
		originDescription: hero.originDescription || '',
		catchPhrase: hero.catchPhrase || '',
		superpowers: hero.superpowers || [],
		images: [],
		currentImages: hero.images || [],
		imagesToRemove: [],
	});

	const [updateHero] = useUpdateHeroMutation();

	const handleChange: EditHeroFormChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const fd = new FormData();
		fd.append('realName', formData.realName);
		fd.append('originDescription', formData.originDescription);
		fd.append('catchPhrase', formData.catchPhrase);
		formData.superpowers.forEach((sp) => fd.append('superpowers', sp));
		formData.images.forEach((img) => fd.append('images', img));
		formData.imagesToRemove.forEach((img) => fd.append('filesToRemove', img));

		try {
			const updated = await updateHero({ id: hero.id, formData: fd }).unwrap();

			navigate(`/hero/${updated.id}`);
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
				isEdit
			/>
			<FormStory
				story={formData.originDescription}
				onChange={handleChange}
			/>
			<FormPowers
				powers={formData.superpowers}
				onChange={handleChange}
			/>
			<HeroEditPhotos
				currentPhotos={formData.currentImages}
				images={formData.images}
				imagesToRemove={formData.imagesToRemove}
				onChange={(files: File[]) => handleChange('images', files)}
				onCurrentRemove={handleChange}
			/>
			<div className={s.btns}>
				<Button
					className={s.cancel}
					onClick={() => navigate(`/hero/${hero.id}`)}
				>
					Cancel
				</Button>
				<Button
					className={s.create}
					Icon={Save}
					type='submit'
				>
					Update
				</Button>
			</div>
		</form>
	);
}
