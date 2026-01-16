import { BookOpen } from 'lucide-react';

import { HeroFormSectionTop } from '../../HeroForm/HeroFormSectionTop/HeroFormSectionTop';

import s from './HeroStory.module.scss';

import { Card } from '@/shared/ui/Card';

interface HeroStoryProps {
	story: string;
}

export function HeroStory({ story }: HeroStoryProps) {
	return (
		<Card
			className={s.story}
			padding='16'
		>
			<HeroFormSectionTop
				text='Origin description'
				Icon={BookOpen}
			/>
			<p className={s.description}>{story}</p>
		</Card>
	);
}
