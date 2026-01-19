import { UseFormRegister } from 'react-hook-form';

import { FormSectionTop } from '../FormSectionTop/FormSectionTop';
import { HeroCreateForm } from '../../model/types/schema';

import s from './FormStory.module.scss';

import { Card } from '@/shared/ui/Card';
import { Textarea } from '@/shared/ui/Textarea';

interface FormStoryProps {
	register: UseFormRegister<HeroCreateForm>;
	error?: string;
}

export function FormStory(props: FormStoryProps) {
	const { register, error } = props;

	return (
		<Card padding='24'>
			<FormSectionTop
				num={2}
				text='Origin description'
			/>
			<Textarea
				className={s.textarea}
				label='Tell the hero story'
				placeholder='He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction...'
				rows={4}
				error={error}
				{...register('originDescription')}
			/>
		</Card>
	);
}
