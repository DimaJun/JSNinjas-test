import { Plus } from 'lucide-react';
import { useState } from 'react';

import { HeroFormSectionTop } from '../HeroFormSectionTop/HeroFormSectionTop';
import { HeroTags } from '../HeroTags/HeroTags';
import { HeroFormChange } from '../HeroForm';

import s from './HeroFormPowers.module.scss';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

interface HeroFormPowersProps {
	powers: string[];
	onChange: HeroFormChange;
}

export function HeroFormPowers(props: HeroFormPowersProps) {
	const { powers, onChange } = props;
	const [tag, setTag] = useState('');

	const onTagAdd = () => {
		if (!tag.trim()) return;
		onChange('superpowers', [...powers, tag.trim()]);
		setTag('');
	};

	return (
		<Card padding='24'>
			<HeroFormSectionTop
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
			/>
		</Card>
	);
}
