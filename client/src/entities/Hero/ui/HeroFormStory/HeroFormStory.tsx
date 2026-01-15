import { useState } from 'react';

import s from './HeroFormStory.module.scss';

import { Card } from '@/shared/ui/Card';
import { HeroFormSectionTop } from '@/entities/Hero/ui/HeroFormSectionTop/HeroFormSectionTop';
import { Textarea } from '@/shared/ui/Textarea';

export function HeroFormStory() {
	const [story, setStory] = useState('');

	return (
		<Card padding='24'>
			<HeroFormSectionTop
				num={2}
				text='Origin description'
			/>
			<Textarea
				className={s.textarea}
				label='Tell the hero story'
				placeholder='He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction...'
				rows={4}
				value={story}
				onChange={(e) => setStory(e.target.value)}
			/>
			<p className={s.symbols}>{story.length} characters</p>
		</Card>
	);
}
