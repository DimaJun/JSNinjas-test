import toast from 'react-hot-toast';

import { ToastItem } from '@/shared/lib/toast/ui/ToastItem';

interface ToastOptions {
	duration?: number;
}

export const showToast = {
	success: (title: string, message?: string, options?: ToastOptions) => {
		toast.custom(
			<ToastItem
				title={title}
				message={message}
				type='success'
			/>,
			{ duration: options?.duration || 2000 }
		);
	},
	error: (title: string, message?: string, options?: ToastOptions) => {
		toast.custom(
			<ToastItem
				title={title}
				message={message}
				type='error'
			/>,
			{ duration: options?.duration || 2000 }
		);
	},
	loading: (title: string, message?: string) => {
		const id = toast.custom(
			<ToastItem
				title={title}
				message={message}
				type='loading'
			/>
		);

		return id;
	},

	updateSuccess: (id: string, title: string, message?: string) => {
		toast.custom(
			<ToastItem
				title={title}
				message={message}
				type='success'
			/>,
			{ id, duration: 2000 }
		);
	},

	updateError: (id: string, title: string, message?: string) => {
		toast.custom(
			<ToastItem
				title={title}
				message={message}
				type='error'
			/>,
			{ id, duration: 2000 }
		);
	},
};
