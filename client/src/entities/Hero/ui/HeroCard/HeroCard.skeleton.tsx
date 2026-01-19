import s from './HeroCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

export function HeroCardSkeleton() {
	return (
		<Card
			className={s.Card}
			padding={'16'}
		>
			<Skeleton
				width='65px'
				height='65px'
				borderRadius='50%'
			/>
			<Skeleton
				width='100px'
				height='18px'
			/>
		</Card>
	);
}
