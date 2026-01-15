import { HeroFormMain } from '../HeroFormMain/HeroFormMain';
import { HeroFormStory } from '../HeroFormStory/HeroFormStory';
import { HeroFormPowers } from '../HeroFormPowers/HeroFormPowers';

import s from './HeroForm.module.scss';

export function HeroForm() {
	return (
		<form className={s.form}>
			<HeroFormMain />
			<HeroFormStory />
			<HeroFormPowers />
		</form>
	);
}
