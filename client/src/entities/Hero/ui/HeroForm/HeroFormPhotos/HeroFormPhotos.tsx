import { ChangeEvent } from 'react';

import { HeroFormSectionTop } from '../HeroFormSectionTop/HeroFormSectionTop';

import s from './HeroFormPhotos.module.scss';
import { ImagePreview } from './ImagePreview/ImagePreview';
import { UploadPlaceholder } from './UploadPlaceholder/UploadPlaceholder';

import { Card } from '@/shared/ui/Card';

export interface ImageItem {
	id: string;
	file: File;
	preview: string;
}

interface HeroFormPhotosProps {
	images: File[];
	onChange: (files: File[]) => void;
}

export function HeroFormPhotos(props: HeroFormPhotosProps) {
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
			<HeroFormSectionTop
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
				{images.length !== 6 && <UploadPlaceholder onChange={onSelectItems} />}
			</div>
			<p className={s.requirements}>Formats: JPG, JPEG, PNG, WEBP. Maximum 6 images.</p>
		</Card>
	);
}
