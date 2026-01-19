import s from './HeroDetailsTop.module.scss';

import { Skeleton } from '@/shared/ui/Skeleton';

export function HeroDetailsTopSkeleton() {
	return (
		<div className={s.top}>
			<Skeleton
				className={s.nick}
				width='100px'
				height='30px'
			/>
			<Skeleton
				width='60px'
				height='26px'
			/>
		</div>
	);
}
