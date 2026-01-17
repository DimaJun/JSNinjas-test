import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { serverStaticImagesUrl } from '../../../consts/hero';

import s from './HeroPhotos.module.scss';

import { Card } from '@/shared/ui/Card';

interface HeroPhotosProps {
	images: string[];
}

export function HeroPhotos({ images }: HeroPhotosProps) {
	const [index, setIndex] = useState(0);

	if (!images.length) {
		return <div className={s.noPhoto}>No photos provided</div>;
	}

	const currentPhoto = `${serverStaticImagesUrl}/${images[index]}`;

	const prev = () => {
		setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
	};

	const next = () => {
		setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
	};

	return (
		<Card
			className={s.gallery}
			padding='16'
		>
			<div className={s.wrapper}>
				<img
					src={currentPhoto}
					alt='Hero photo'
				/>
				{images.length > 1 && (
					<>
						<button
							className={s.prev}
							type='button'
							onClick={prev}
						>
							<ChevronLeft />
						</button>
						<button
							className={s.next}
							type='button'
							onClick={next}
						>
							<ChevronRight />
						</button>
					</>
				)}
				<p className={s.counter}>
					{index + 1} / {images.length}
				</p>
			</div>
		</Card>
	);
}
