import { Upload } from 'lucide-react';
import { ChangeEvent } from 'react';

import s from './UploadPlaceholder.module.scss';

interface UploadPlaceholderProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	multiple?: boolean;
	accept?: string;
	label?: string;
}

export function UploadPlaceholder(props: UploadPlaceholderProps) {
	const { onChange, accept, label, multiple } = props;

	return (
		<label className={s.uploadPlaceholder}>
			<Upload />
			<p>{label}</p>
			<input
				className={s.hidden}
				type='file'
				accept={accept}
				multiple={multiple}
				onChange={onChange}
			/>
		</label>
	);
}
