import { Plus } from 'lucide-react';
import { useState } from 'react';

import { CreateHeroFormChange } from '../../model/types/create';
import { FormSectionTop } from '../FormSectionTop/FormSectionTop';

import s from './FormPowers.module.scss';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HeroTags } from '@/entities/Hero';

interface FormPowersProps {
	powers: string[];
	onChange: CreateHeroFormChange;
}

export function FormPowers(props: FormPowersProps) {
	const { powers, onChange } = props;
	const [tag, setTag] = useState('');

	const onTagAdd = () => {
		if (!tag.trim()) return;
		onChange('superpowers', [...powers, tag.trim()]);
		setTag('');
	};

	const onTagRemove = (tagToRemove: string) => {
		onChange(
			'superpowers',
			powers.filter((p) => p !== tagToRemove)
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
