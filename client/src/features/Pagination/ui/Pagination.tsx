import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import s from './Pagination.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';

const maxPages = 5;
export function Pagination() {
	const [page, setPage] = useState(1);

	return (
		<div className={classNames(s.Pagination, {}, [])}>
			<Button
				className={s.btn}
				padding='8'
				onClick={() => setPage((prev) => prev - 1)}
				disabled={page === 1}
			>
				<ChevronLeft />
			</Button>
			<p className={s.page}>
				Page: <span>{page}</span>
			</p>
			<Button
				className={s.btn}
				padding='8'
				onClick={() => setPage((prev) => prev + 1)}
				disabled={page === maxPages}
			>
				<ChevronRight />
			</Button>
		</div>
	);
}
