import { Plus } from 'lucide-react';
import { useState } from 'react';

import { HeroFormSectionTop } from '../HeroFormSectionTop/HeroFormSectionTop';
import { HeroTags } from '../HeroTags/HeroTags';

import s from './HeroFormPowers.module.scss';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function HeroFormPowers() {
	const [tag, setTag] = useState('');
	const [tags, setTags] = useState<string[]>([]);

	const onTagAdd = () => {
		setTags((prev) => [...prev, tag]);
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
				tags={tags}
			/>
		</Card>
	);
}
