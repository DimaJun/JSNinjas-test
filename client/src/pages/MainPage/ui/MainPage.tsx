import { useState } from 'react';

import s from './MainPage.module.scss';

import { Pagination } from '@/features/Pagination';
import { HeroesList, useGetAllHeroesQuery } from '@/entities/Hero';
import { Page } from '@/shared/ui/Page';
import { classNames } from '@/shared/helpers';

const LIMIT = 5;

function MainPage() {
	const [page, setPage] = useState(1);

	const { data } = useGetAllHeroesQuery({
		page,
		limit: LIMIT,
	});

	return (
		<Page className={classNames(s.MainPage, {}, [])}>
			<HeroesList heroes={data?.heroes} />
			{data && (
				<Pagination
					page={page}
					totalPages={data.meta.totalPages}
					onChange={setPage}
				/>
			)}
		</Page>
	);
}

export default MainPage;
