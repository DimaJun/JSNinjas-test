import { TextareaHTMLAttributes } from 'react';

import s from './Textarea.module.scss';

import { classNames } from '@/shared/helpers';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	label?: string;
	error?: string;
}

export function Textarea(props: TextareaProps) {
	const { className, label, error, placeholder, cols, rows, value, onChange, ...rest } = props;

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
				{error && <p className={s.error}>{error}</p>}
			</div>
		);
	}

	return (
		<div className={s.wrapper}>
			<textarea
				className={classNames(s.Textarea, {}, [className])}
				cols={cols}
				rows={rows}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				{...rest}
			/>
			{error && <p className={s.error}>{error}</p>}
		</div>
	);
}
