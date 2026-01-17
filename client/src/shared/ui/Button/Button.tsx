import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

import s from './Button.module.scss';

import { classNames } from '@/shared/helpers';

type ButtonPadding = '8' | '12' | '16';

const mapPaddingToClass: Record<ButtonPadding, string> = {
	'8': s.p8,
	'12': s.p12,
	'16': s.p16,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	padding?: ButtonPadding;
	children: ReactNode;
	Icon?: LucideIcon;
}

export function Button(props: ButtonProps) {
	const { className, Icon, children, padding, type = 'button', onClick, ...rest } = props;

	const mappedPadding = mapPaddingToClass[padding];

	return (
		<button
			className={classNames(s.Button, {}, [className, mappedPadding])}
			type={type}
			onClick={onClick}
			{...rest}
		>
			{Icon && (
				<Icon
					className={s.icon}
					size={20}
				/>
			)}
			{children}
		</button>
	);
}
