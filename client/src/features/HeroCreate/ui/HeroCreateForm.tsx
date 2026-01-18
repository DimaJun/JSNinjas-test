import { Save } from 'lucide-react';
import { useEffect } from 'react';

import { useHeroCreate } from '../hooks/useHeroCreate';

import s from './HeroCreateForm.module.scss';
import { FormMainInfo } from './FormMainInfo/FormMainInfo';
import { FormStory } from './FormStory/FormStory';
import { FormPowers } from './FormPowers/FormPowers';
import { FormPhotos } from './FormPhotos/FormPhotos';

import { Button } from '@/shared/ui/Button';

export function HeroCreateForm() {
	const { formData, handleChange, handleSubmit, navigate } = useHeroCreate();

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
