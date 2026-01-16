import { useState } from 'react';

import s from './MainPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Pagination } from '@/features/Pagination';
import { HeroesList, useGetAllHeroesQuery } from '@/entities/Hero';

const LIMIT = 5;

export function MainPage() {
	const [page, setPage] = useState(1);

	const { data } = useGetAllHeroesQuery({
		page,
		limit: LIMIT,
	});

	return (
		<div className={classNames(s.MainPage, {}, [])}>
			<HeroesList heroes={data?.heroes} />
			{data && (
				<Pagination
					page={page}
					totalPages={data.meta.totalPages}
					onChange={setPage}
				/>
			)}
		</div>
	);
}
