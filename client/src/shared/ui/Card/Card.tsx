import { PropsWithChildren } from 'react';

import s from './Card.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

type CardPadding = '8' | '16' | '24';

const mapPaddingToClass: Record<CardPadding, string> = {
	'8': s.p8,
	'16': s.p16,
	'24': s.p24,
};

interface CardProps extends PropsWithChildren {
	className?: string;
	padding?: CardPadding;
}

export function Card(props: CardProps) {
	const { className, padding = '8', children } = props;

	const mappedPadding = mapPaddingToClass[padding];

	return <div className={classNames(s.Card, {}, [className, mappedPadding])}>{children}</div>;
}
