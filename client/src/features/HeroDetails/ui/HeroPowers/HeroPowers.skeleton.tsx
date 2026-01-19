import { Zap } from 'lucide-react';

import s from './HeroPowers.module.scss';

import { FormSectionTop } from '@/features/HeroCreate';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

export function HeroPowersSkeleton() {
	return (
		<Card
			className={s.powers}
			padding='16'
		>
			<FormSectionTop
				text='Superpowers'
				Icon={Zap}
			/>
			<div className={s.tags}>
				<Skeleton
					width='100px'
					height='36px'
					borderRadius='18px'
				/>
				<Skeleton
					width='80px'
					height='36px'
					borderRadius='18px'
				/>
				<Skeleton
					width='100px'
					height='36px'
					borderRadius='18px'
				/>
				<Skeleton
					width='60px'
					height='36px'
					borderRadius='18px'
				/>
			</div>
		</Card>
	);
}
