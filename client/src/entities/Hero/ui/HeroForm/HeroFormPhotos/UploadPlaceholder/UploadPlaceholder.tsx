import { Upload } from 'lucide-react';
import { ChangeEvent } from 'react';

import s from './UploadPlaceholder.module.scss';

interface UploadPlaceholderProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function UploadPlaceholder({ onChange }: UploadPlaceholderProps) {
	return (
		<label className={s.uploadPlaceholder}>
			<Upload />
			<p>Upload photo</p>
			<input
				className={s.hidden}
				type='file'
				accept='image/webp, image/jpg, image/png, image/jpeg'
				multiple
				onChange={onChange}
			/>
		</label>
	);
}
