import { ChevronLeft, ChevronRight } from 'lucide-react';

import s from './Pagination.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface PaginationProps {
	page: number;
	totalPages: number;
	onChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
	const { page, totalPages, onChange } = props;

	return (
		<div className={classNames(s.Pagination, {}, [])}>
			<Button
				className={s.btn}
				padding='8'
				onClick={() => onChange(page - 1)}
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
				onClick={() => onChange(page + 1)}
				disabled={page === totalPages}
			>
				<ChevronRight />
			</Button>
		</div>
	);
}
