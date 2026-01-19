import { BookOpen } from 'lucide-react';

import s from './HeroStory.module.scss';

import { FormSectionTop } from '@/features/HeroCreate';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

export function HeroStorySkeleton() {
	return (
		<Card
			className={s.story}
			padding='16'
		>
			<FormSectionTop
				text='Origin description'
				Icon={BookOpen}
			/>
			<Skeleton
				width='100%'
				height='80px'
			/>
		</Card>
	);
}
