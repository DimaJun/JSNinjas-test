import s from './HeroCatchPhrase.module.scss';

import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

export function HeroCatchPhraseSkeleton() {
	return (
		<Card
			className={s.wrapper}
			padding='16'
		>
			<Skeleton
				width='100%'
				height='24px'
				borderRadius='4px'
			/>
		</Card>
	);
}
