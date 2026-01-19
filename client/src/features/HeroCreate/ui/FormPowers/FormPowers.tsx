import { Plus } from 'lucide-react';
import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { HeroCreateForm } from '../../model/types/schema';
import { FormSectionTop } from '../FormSectionTop/FormSectionTop';

import s from './FormPowers.module.scss';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HeroTags } from '@/entities/Hero';

interface FormPowersProps {
	powers: string[];
	setValue: UseFormSetValue<HeroCreateForm>;
	error?: string;
}

export function FormPowers(props: FormPowersProps) {
	const { powers, setValue, error } = props;
	const [tag, setTag] = useState('');

	const onTagAdd = () => {
		if (!tag.trim()) return;
		setValue('superpowers', [...powers, tag.trim()], { shouldValidate: true });
		setTag('');
	};

	const onTagRemove = (tagToRemove: string) => {
		setValue(
			'superpowers',
			powers.filter((p) => p !== tagToRemove),
			{ shouldValidate: true }
		);
	};

	return (
		<Card padding='24'>
			<FormSectionTop
				num={3}
				text='Superpowers'
			/>
			<div className={s.powersInput}>
				<Input
					placeholder='Enter superpower'
					value={tag}
					onChange={(e) => setTag(e.target.value)}
					error={error}
				/>
				<Button
					className={s.addBtn}
					Icon={Plus}
					onClick={onTagAdd}
				>
					Add
				</Button>
			</div>
			<HeroTags
				className={s.powers}
				tags={powers}
				onRemove={(tag) => onTagRemove(tag)}
			/>
		</Card>
	);
}
