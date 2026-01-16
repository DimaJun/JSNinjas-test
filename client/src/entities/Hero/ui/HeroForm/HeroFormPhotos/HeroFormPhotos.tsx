import { ChangeEvent, useState } from 'react';

import { HeroFormSectionTop } from '../HeroFormSectionTop/HeroFormSectionTop';

import s from './HeroFormPhotos.module.scss';
import { ImagePreview } from './ImagePreview/ImagePreview';
import { UploadPlaceholder } from './UploadPlaceholder/UploadPlaceholder';

import { Card } from '@/shared/ui/Card';

interface ImageItem {
	id: string;
	file: File;
	preview: string;
}

export function HeroFormPhotos() {
	const [images, setImages] = useState<ImageItem[]>([]);

	const onSelectItems = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files) return;

		const selectedFiles = Array.from(files);

		const newImages: ImageItem[] = selectedFiles.map((file) => ({
			id: crypto.randomUUID(),
			file,
			preview: URL.createObjectURL(file),
		}));

		setImages((prev) => [...prev, ...newImages]);

		e.target.value = '';
	};

	const removeImage = (index: number) => {
		setImages((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<Card padding='24'>
			<HeroFormSectionTop
				num={4}
				text='Image gallery'
			/>
			<p className={s.limit}>{images.length}/6 photos uploaded</p>
			<div className={s.photos}>
				{images.map(({ id, preview }, index) => (
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
