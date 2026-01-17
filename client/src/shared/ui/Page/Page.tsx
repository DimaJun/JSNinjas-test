import { PropsWithChildren } from 'react';

import s from './Page.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface PageProps extends PropsWithChildren {
	className?: string;
}

export function Page(props: PageProps) {
	const { className, children } = props;

	return <main className={classNames(s.Page, {}, [className])}>{children}</main>;
}
