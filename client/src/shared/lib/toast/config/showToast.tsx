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
			{ duration: options?.duration || 1000 }
		);
	},
	error: (title: string, message?: string, options?: ToastOptions) => {
		toast.custom(
			<ToastItem
				title={title}
				message={message}
				type='error'
			/>,
			{ duration: options?.duration || 1000 }
		);
	},
	loading: (title: string, message?: string, options?: ToastOptions) => {
		toast.custom(
			<ToastItem
				title={title}
				message={message}
				type='loading'
			/>,
			{ duration: options?.duration || 1000 }
		);
	},
};
