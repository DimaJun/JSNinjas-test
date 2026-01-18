import { useEffect } from 'react';
import { Save } from 'lucide-react';

import s from './HeroEditForm.module.scss';
import { HeroEditPhotos } from './FormEditPhotos/FormEditPhotos';

import { Button } from '@/shared/ui/Button';
import { Hero } from '@/entities/Hero';
import { FormMainInfo, FormPowers, FormStory } from '@/features/HeroCreate';
import { useHeroEdit } from '@/features/HeroEdit/hooks/useHeroEdit';

interface HeroEditFormProps {
	hero: Hero;
}

export function HeroEditForm(props: HeroEditFormProps) {
	const { hero } = props;

	const { formData, handleSubmit, handleChange, navigate } = useHeroEdit(hero);

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
