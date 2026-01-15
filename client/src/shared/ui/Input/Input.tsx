import { InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
}

export function Input(props: InputProps) {
	const { className, label, placeholder, type = 'text', value, onChange, ...rest } = props;

	if (label) {
		return (
			<div className={s.wrapper}>
				<p className={s.label}>{label}</p>
				<input
					className={classNames(s.Input, {}, [className])}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					type={type}
					{...rest}
				/>
			</div>
		);
	}

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
