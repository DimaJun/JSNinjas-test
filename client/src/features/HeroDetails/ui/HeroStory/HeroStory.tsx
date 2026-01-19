import { BookOpen } from 'lucide-react';

import s from './HeroStory.module.scss';

import { Card } from '@/shared/ui/Card';
import { FormSectionTop } from '@/features/HeroCreate';

interface HeroStoryProps {
	story: string;
}

export function HeroStory({ story }: HeroStoryProps) {
	return (
		<Card
			className={s.story}
			padding='16'
		>
			<FormSectionTop
				text='Origin description'
				Icon={BookOpen}
			/>
			<p className={s.description}>{story}</p>
		</Card>
	);
}
