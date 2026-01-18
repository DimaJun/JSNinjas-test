import { ChangeEvent } from 'react';

import { EditHeroFormChange } from '../../model/types/edit';

import s from './FormEditPhotos.module.scss';

import { Card } from '@/shared/ui/Card';
import { FormSectionTop, ImagePreview } from '@/features/HeroCreate';
import type { ImageItem } from '@/features/HeroCreate';
import { UploadPlaceholder } from '@/shared/ui/UploadPlaceholder';
import { handleFileSelect } from '@/shared/utilities';

interface HeroEditPhotosProps {
	currentPhotos: string[];
	images: File[];
	imagesToRemove: string[];
	onChange: (files: File[]) => void;
	onCurrentRemove: EditHeroFormChange;
}

export function HeroEditPhotos(props: HeroEditPhotosProps) {
	const { currentPhotos, images, imagesToRemove, onChange, onCurrentRemove } = props;

	const imageItems: ImageItem[] = images.map((file) => ({
		id: crypto.randomUUID(),
		file,
		preview: URL.createObjectURL(file),
	}));

	const totalImages = currentPhotos.length + images.length;

	const onSelectItems = (e: ChangeEvent<HTMLInputElement>) => {
		handleFileSelect(e, images, onChange);
	};

	const onImageRemove = (index: number) => {
		URL.revokeObjectURL(imageItems[index].id);
		onChange(images.filter((_, i) => i !== index));
	};

	const onRemoveCurrentImage = (index: number, url: string) => {
		onCurrentRemove('imagesToRemove', [...imagesToRemove, url]);
		const updatedCurrent = currentPhotos.filter((_, i) => i !== index);
		onCurrentRemove('currentImages', updatedCurrent);
	};

	return (
		<Card padding='24'>
			<FormSectionTop
				num={4}
				text='Image gallery'
			/>
			<div className={s.photos}>
				<p>Current photos: {currentPhotos.length === 0 && 'No current photos'}</p>
				<div className={s.grid}>
					{currentPhotos.map((img, index) => (
						<ImagePreview
							key={`current-image-${img}`}
							preview={img}
							index={index}
							onRemove={() => onRemoveCurrentImage(index, img)}
							isCurrent
						/>
					))}
				</div>
				<p>Add images:</p>
				<div className={s.grid}>
					{imageItems.map(({ id, preview }, index) => (
						<ImagePreview
							key={`new-image-${id}`}
							preview={preview}
							index={index}
							onRemove={() => onImageRemove(index)}
						/>
					))}
					{totalImages < 6 && (
						<UploadPlaceholder
							onChange={onSelectItems}
							label='Upload photos'
							accept='image/webp, image/jpg, image/png, image/jpeg'
							multiple
						/>
					)}
				</div>
			</div>
		</Card>
	);
}
