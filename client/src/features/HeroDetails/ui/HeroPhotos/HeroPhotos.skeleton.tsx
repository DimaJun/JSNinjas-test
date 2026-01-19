import s from './HeroPhotos.module.scss';

import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

export function HeroPhotosSkeleton() {
	return (
		<Card
			className={s.gallery}
			padding='16'
		>
			<div className={s.wrapper}>
				<Skeleton
					width='100%'
					height='100%'
				/>
			</div>
		</Card>
	);
}
