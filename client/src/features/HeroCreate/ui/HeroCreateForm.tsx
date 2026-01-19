import { Save } from 'lucide-react';

import { useHeroCreate } from '../hooks/useHeroCreate';

import s from './HeroCreateForm.module.scss';
import { FormMainInfo } from './FormMainInfo/FormMainInfo';
import { FormStory } from './FormStory/FormStory';
import { FormPowers } from './FormPowers/FormPowers';
import { FormPhotos } from './FormPhotos/FormPhotos';

import { Button } from '@/shared/ui/Button';

export function HeroCreateForm() {
	const {
		formData,
		handleChange,
		onSubmit,
		handleSubmit,
		register,
		watch,
		navigate,
		setValue,
		fileError,
		errors,
	} = useHeroCreate();

	const powers = watch('superpowers');

	return (
		<form
			className={s.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormMainInfo
				register={register}
				nickError={errors?.nickname?.message}
				realNameError={errors?.realName?.message}
				phraseError={errors?.catchPhrase?.message}
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
			<FormPhotos
				images={formData.images}
				onChange={(files: File[]) => handleChange('images', files)}
				error={fileError}
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
