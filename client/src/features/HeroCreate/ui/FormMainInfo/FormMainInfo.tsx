import { UseFormRegister } from 'react-hook-form';

import { FormSectionTop } from '../FormSectionTop/FormSectionTop';
import { HeroCreateForm } from '../../model/types/schema';

import s from './FormMainInfo.module.scss';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

interface FormMainInfoProps {
	register: UseFormRegister<HeroCreateForm>;
	nickError?: string;
	realNameError?: string;
	phraseError?: string;
	isEdit?: boolean;
}

export function FormMainInfo(props: FormMainInfoProps) {
	const { register, nickError, realNameError, phraseError, isEdit = false } = props;

	return (
		<Card
			className={s.formSection}
			padding='24'
		>
			<FormSectionTop
				num={1}
				text='Basic information'
			/>
			<div className={s.inputs}>
				<Input
					label='Superhero nickname'
					placeholder='Superman'
					disabled={isEdit}
					error={nickError}
					{...register('nickname')}
				/>
				<Input
					label='Real name'
					placeholder='Clark Kent'
					error={realNameError}
					{...register('realName')}
				/>
				<Input
					label='Catch phrase'
					placeholder='Look, up in the sky, its a bird, its a plane, its Superman!'
					error={phraseError}
					{...register('catchPhrase')}
				/>
			</div>
		</Card>
	);
}
