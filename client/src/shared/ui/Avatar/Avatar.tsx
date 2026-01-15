import { ImgHTMLAttributes } from 'react';

import s from './Avatar.module.scss';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	rounded?: boolean;
	size?: number;
}

export function Avatar(props: AvatarProps) {
	const { className, rounded = false, src, size = 50, alt, ...rest } = props;

	const mods: Mods = {
		[s.rounded]: rounded,
	};

	return (
		<img
			className={classNames(s.Avatar, mods, [className])}
			src={src ?? 'https://placehold.net/avatar.png'}
			alt={alt}
			style={{
				width: size + 'px',
				height: size + 'px',
			}}
			{...rest}
		/>
	);
}
