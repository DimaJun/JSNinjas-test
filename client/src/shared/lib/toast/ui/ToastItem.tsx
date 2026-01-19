import { LucideIcon, CircleCheck, CircleX, LoaderCircle } from 'lucide-react';

import { ToastType } from '../model/types/toast';

import s from './ToastItem.module.scss';

import { classNames } from '@/shared/helpers';

interface ToastItemProps {
	title: string;
	message?: string;
	type: ToastType;
}

const mapTypeToIcon: Record<ToastType, LucideIcon> = {
	success: CircleCheck,
	error: CircleX,
	loading: LoaderCircle,
};

const mapTypeToColor: Record<ToastType, string> = {
	success: s.success,
	error: s.error,
	loading: s.loading,
};

export function ToastItem(props: ToastItemProps) {
	const { title, message, type } = props;

	const Icon = mapTypeToIcon[type];
	const color = mapTypeToColor[type];
	const isLoading = type === 'loading';

	return (
		<div className={classNames(s.Toast)}>
			<Icon className={classNames(s.icon, { [s.loading]: isLoading }, [color])} />
			<div className={s.content}>
				<p className={s.title}>{title}</p>
				{message && <p className={s.message}>{message}</p>}
			</div>
		</div>
	);
}
