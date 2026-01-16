import { BookOpen } from 'lucide-react';

import { HeroFormSectionTop } from '../../HeroForm/HeroFormSectionTop/HeroFormSectionTop';

import s from './HeroStory.module.scss';

import { Card } from '@/shared/ui/Card';

export function HeroStory() {
	return (
		<Card
			className={s.story}
			padding='16'
		>
			<HeroFormSectionTop
				text='Origin description'
				Icon={BookOpen}
			/>
			<p className={s.description}>
				He was born Kal-El on the planet Krypton, before being rocketed to Earth as an
				infant by his scientist father Jor-El, moments before Krypton`s destruction. He was
				born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by
				his scientist father Jor-El, moments before Krypton`s destruction. He was born
				Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his
				scientist father Jor-El, moments before Krypton`s destruction. He was born Kal-El on
				the planet Krypton, before being rocketed to Earth as an infant by his scientist
				father Jor-El, moments before Krypton`s destruction.
			</p>
		</Card>
	);
}
