import { X } from 'lucide-react';

import s from './ImagePreview.module.scss';

interface ImagePreviewProps {
	preview: string;
	index: number;
	onRemove: () => void;
}

export function ImagePreview(props: ImagePreviewProps) {
	const { index, preview, onRemove } = props;
	return (
		<div className={s.preview}>
			<img
				className={s.image}
				src={preview}
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
