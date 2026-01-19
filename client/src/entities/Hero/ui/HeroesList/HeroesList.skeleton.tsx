import { HeroCardSkeleton } from '../HeroCard/HeroCard.skeleton';

import s from './HeroesList.module.scss';

export function HeroesListSkeleton() {
	return (
		<div className={s.List}>
			{...Array(5).map((_, index) => (
				<HeroCardSkeleton key={`hero-card-skeleton-${index}`} />
			))}
		</div>
	);
}
