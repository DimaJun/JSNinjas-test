import { CSSProperties } from 'react';

import s from './Skeleton.module.scss';

import { classNames } from '@/shared/helpers';

interface SkeletonProps {
	className?: string;
	width?: string;
	height?: string;
	borderRadius?: string;
}

export function Skeleton(props: SkeletonProps) {
	const { className, width, height, borderRadius } = props;

	const styles: CSSProperties = {
		width,
		height,
		borderRadius,
	};

	return (
		<div
			className={classNames(s.Skeleton, {}, [className])}
			style={styles}
		/>
	);
}
