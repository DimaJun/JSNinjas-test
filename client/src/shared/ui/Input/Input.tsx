import { InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export function Input(props: InputProps) {
	const { className, placeholder, type = 'text', value, onChange, ...rest } = props;

	return (
		<input
			className={classNames(s.Input, {}, [className])}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			type={type}
			{...rest}
		/>
	);
}
