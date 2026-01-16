import s from './MainPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Pagination } from '@/features/Pagination';
import { HeroesList } from '@/entities/Hero';

export function MainPage() {
	return (
		<div className={classNames(s.MainPage, {}, [])}>
			<HeroesList />
			<Pagination />
		</div>
	);
}
