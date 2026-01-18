import { ChangeEvent } from 'react';

import { FormSectionTop } from '../FormSectionTop/FormSectionTop';
import { ImagePreview } from '../ImagePreview/ImagePreview';
import { ImageItem } from '../../model/types/create';

import s from './FormPhotos.module.scss';

import { Card } from '@/shared/ui/Card';
import { UploadPlaceholder } from '@/shared/ui/UploadPlaceholder';

interface FormPhotosProps {
	images: File[];
	onChange: (files: File[]) => void;
}

export function FormPhotos(props: FormPhotosProps) {
	const { images, onChange } = props;

	const imageItems: ImageItem[] = images.map((file) => ({
		id: crypto.randomUUID(),
		file,
		preview: URL.createObjectURL(file),
	}));

	const onSelectItems = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files) return;

		const newFiles = Array.from(files);

		onChange([...images, ...newFiles]);

		e.target.value = '';
	};

	const removeImage = (index: number) => {
		URL.revokeObjectURL(imageItems[index].id);
		onChange(images.filter((_, i) => i !== index));
	};

	return (
		<Card padding='24'>
			<FormSectionTop
				num={4}
				text='Image gallery'
			/>
			<p className={s.limit}>{images.length}/6 photos uploaded</p>
			<div className={s.photos}>
				{imageItems.map(({ id, preview }, index) => (
					<ImagePreview
						key={id}
						preview={preview}
						index={index}
						onRemove={() => removeImage(index)}
					/>
				))}
				{images.length !== 6 && (
					<UploadPlaceholder
						onChange={onSelectItems}
						label='Upload photos:'
						accept='image/webp, image/jpg, image/png, image/jpeg'
						multiple
					/>
				)}
			</div>
			<p className={s.requirements}>Formats: JPG, JPEG, PNG, WEBP. Maximum 6 images.</p>
		</Card>
	);
}
