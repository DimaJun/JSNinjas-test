import s from './HeroDetails.module.scss';
import { HeroDetailsTopSkeleton } from './HeroDetailsTop/HeroDetailsTop.skeleton';
import { HeroPhotosSkeleton } from './HeroPhotos/HeroPhotos.skeleton';
import { HeroCatchPhraseSkeleton } from './HeroCatchPhrase/HeroCatchPhrase.skeleton';
import { HeroStorySkeleton } from './HeroStory/HeroStory.skeleton';
import { HeroPowersSkeleton } from './HeroPowers/HeroPowers.skeleton';
import { HeroInfoSkeleton } from './HeroInfo/HeroInfo.skeleton';

export function HeroDetailsSkeleton() {
	return (
		<div className={s.details}>
			<HeroDetailsTopSkeleton />
			<HeroPhotosSkeleton />
			<HeroCatchPhraseSkeleton />
			<HeroStorySkeleton />
			<HeroPowersSkeleton />
			<HeroInfoSkeleton />
		</div>
	);
}
