import s from './MainPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { HeroSearch } from '@/features/HeroSearch';
import { Pagination } from '@/features/Pagination';
import { HeroesList } from '@/entities/Hero';

export function MainPage() {
	return (
		<div className={classNames(s.MainPage, {}, [])}>
			<HeroSearch />
			<HeroesList />
			<Pagination />
		</div>
	);
}
