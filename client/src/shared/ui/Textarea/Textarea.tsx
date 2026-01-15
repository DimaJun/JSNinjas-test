import { TextareaHTMLAttributes } from 'react';

import s from './Textarea.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	label?: string;
}

export function Textarea(props: TextareaProps) {
	const { className, label, placeholder, cols, rows, value, onChange, ...rest } = props;

	if (label) {
		return (
			<div className={s.wrapper}>
				<p className={s.label}>{label}</p>
				<textarea
					className={classNames(s.Textarea, {}, [className])}
					cols={cols}
					rows={rows}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					{...rest}
				/>
			</div>
		);
	}

	return (
		<textarea
			className={classNames(s.Textarea, {}, [className])}
			cols={cols}
			rows={rows}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			{...rest}
		/>
	);
}
