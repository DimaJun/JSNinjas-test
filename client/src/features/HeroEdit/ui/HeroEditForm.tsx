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

	const {
		formData,
		handleSubmit,
		onSubmit,
		handleChange,
		errors,
		watch,
		setValue,
		register,
		fileError,
		setFileError,
		navigate,
	} = useHeroEdit(hero);

	const powers = watch('superpowers');

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	return (
		<form
			className={s.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormMainInfo
				register={register}
				realNameError={errors?.realName?.message}
				phraseError={errors?.catchPhrase?.message}
				isEdit
			/>
			<FormStory
				register={register}
				error={errors?.originDescription?.message}
			/>
			<FormPowers
				powers={powers}
				setValue={setValue}
				error={errors?.superpowers?.message}
			/>
			<HeroEditPhotos
				currentPhotos={formData.currentImages}
				images={formData.images}
				imagesToRemove={formData.imagesToRemove}
				error={fileError}
				setError={setFileError}
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
