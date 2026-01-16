import { ChevronLeft, ChevronRight } from 'lucide-react';

import s from './HeroPhotos.module.scss';

import { Card } from '@/shared/ui/Card';

export function HeroPhotos() {
	return (
		<Card
			className={s.gallery}
			padding='16'
		>
			<div className={s.wrapper}>
				<img
					src=''
					alt='Some photo'
				/>
				<button
					className={s.prev}
					type='button'
				>
					<ChevronLeft />
				</button>
				<button
					className={s.next}
					type='button'
				>
					<ChevronRight />
				</button>
				<p className={s.counter}>1 / 4</p>
			</div>
		</Card>
	);
}
