import s from './HeroDetails.module.scss';
import { HeroDetailsTop } from './HeroDetailsTop/HeroDetailsTop';
import { HeroPhotos } from './HeroPhotos/HeroPhotos';
import { HeroCatchPhrase } from './HeroCatchPhrase/HeroCatchPhrase';
import { HeroStory } from './HeroStory/HeroStory';
import { HeroPowers } from './HeroPowers/HeroPowers';
import { HeroInfo } from './HeroInfo/HeroInfo';

export function HeroDetails() {
	return (
		<div className={s.details}>
			<HeroDetailsTop />
			<HeroPhotos />
			<HeroCatchPhrase />
			<HeroStory />
			<HeroPowers />
			<HeroInfo />
		</div>
	);
}
