import { HeroCard } from '../HeroCard/HeroCard';

import s from './HeroesList.module.scss';

import { Hero } from '@/entities/Hero';

interface HeroesListProps {
	heroes?: Hero[];
}

export function HeroesList({ heroes }: HeroesListProps) {
	return (
		<div className={s.List}>
			{heroes?.map(({ id, nickname, images }) => (
				<HeroCard
					key={id}
					id={id}
					nickname={nickname}
					avatar={images[0]}
				/>
			))}
		</div>
	);
}
