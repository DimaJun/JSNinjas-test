import { X } from 'lucide-react';

import s from './ImagePreview.module.scss';

import { serverStaticImagesUrl } from '@/entities/Hero/consts/hero';

interface ImagePreviewProps {
	preview: string;
	index: number;
	isCurrent?: boolean;
	onRemove: () => void;
}

export function ImagePreview(props: ImagePreviewProps) {
	const { index, preview, onRemove, isCurrent = false } = props;
	return (
		<div className={s.preview}>
			<img
				className={s.image}
				src={isCurrent ? `${serverStaticImagesUrl}/${preview}` : preview}
				alt={`Preview ${index + 1}`}
			/>
			<button
				className={s.deleteImg}
				onClick={onRemove}
				type='button'
			>
				<X size={16} />
			</button>
			<div className={s.caption}>Photo {index + 1}</div>
		</div>
	);
}
