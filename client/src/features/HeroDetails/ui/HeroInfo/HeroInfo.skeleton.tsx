import { Info } from 'lucide-react';

import s from './HeroInfo.module.scss';

import { FormSectionTop } from '@/features/HeroCreate';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

export function HeroInfoSkeleton() {
	return (
		<Card
			className={s.info}
			padding='16'
		>
			<FormSectionTop
				text='Information'
				Icon={Info}
			/>
			<div className={s.infoRow}>
				<span>Nickname:</span>
				<Skeleton
					width='100px'
					height='16px'
				/>
			</div>
			<div className={s.infoRow}>
				<span>Real name:</span>
				<Skeleton
					width='100px'
					height='16px'
				/>
			</div>
			<div className={s.infoRow}>
				<span>Superpowers:</span>
				<Skeleton
					width='20px'
					height='16px'
				/>
			</div>
			<div className={s.infoRow}>
				<span>Photos:</span>
				<Skeleton
					width='20px'
					height='16px'
				/>
			</div>
		</Card>
	);
}
