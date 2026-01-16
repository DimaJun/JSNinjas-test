import s from './HeroDetails.module.scss';
import { HeroDetailsTop } from './HeroDetailsTop/HeroDetailsTop';
import { HeroPhotos } from './HeroPhotos/HeroPhotos';
import { HeroCatchPhrase } from './HeroCatchPhrase/HeroCatchPhrase';
import { HeroStory } from './HeroStory/HeroStory';
import { HeroPowers } from './HeroPowers/HeroPowers';
import { HeroInfo } from './HeroInfo/HeroInfo';

import { Hero } from '@/entities/Hero';

interface HeroDetailsProps {
	hero: Hero;
}

export function HeroDetails({ hero }: HeroDetailsProps) {
	const { nickname, realName, images, originDescription, catchPhrase, superpowers } = hero;

	return (
		<div className={s.details}>
			<HeroDetailsTop
				nickname={nickname}
				realName={realName}
			/>
			<HeroPhotos images={images} />
			<HeroCatchPhrase phrase={catchPhrase} />
			<HeroStory story={originDescription} />
			<HeroPowers powers={superpowers} />
			<HeroInfo
				nickname={nickname}
				realName={realName}
				photosCount={images.length}
				powersCount={superpowers.length}
			/>
		</div>
	);
}
