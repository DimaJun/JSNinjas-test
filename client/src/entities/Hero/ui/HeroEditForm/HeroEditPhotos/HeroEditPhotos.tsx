import { ChangeEvent } from 'react';

import { HeroFormSectionTop } from '../../HeroForm/HeroFormSectionTop/HeroFormSectionTop';
import { ImagePreview } from '../../HeroForm/HeroFormPhotos/ImagePreview/ImagePreview';

import s from './HeroEditPhotos.module.scss';

import { Card } from '@/shared/ui/Card';
import { ImageItem } from '@/entities/Hero/ui/HeroForm/HeroFormPhotos/HeroFormPhotos';
import { UploadPlaceholder } from '@/entities/Hero/ui/HeroForm/HeroFormPhotos/UploadPlaceholder/UploadPlaceholder';
import { EditHeroFormChange } from '@/entities/Hero/ui/HeroEditForm/HeroEditForm';

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
		const files = e.target.files;
		if (!files) return;

		const newFiles = Array.from(files);

		onChange([...images, ...newFiles]);

		e.target.value = '';
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
			<HeroFormSectionTop
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
					{totalImages < 6 && <UploadPlaceholder onChange={onSelectItems} />}
				</div>
			</div>
		</Card>
	);
}
