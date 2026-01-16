import { Save } from 'lucide-react';

import { HeroFormMain } from './HeroFormMain/HeroFormMain';
import { HeroFormStory } from './HeroFormStory/HeroFormStory';
import { HeroFormPowers } from './HeroFormPowers/HeroFormPowers';
import { HeroFormPhotos } from './HeroFormPhotos/HeroFormPhotos';
import s from './HeroForm.module.scss';

import { Button } from '@/shared/ui/Button';

export function HeroForm() {
	return (
		<form className={s.form}>
			<HeroFormMain />
			<HeroFormStory />
			<HeroFormPowers />
			<HeroFormPhotos />
			<div className={s.btns}>
				<Button className={s.cancel}>Cancel</Button>
				<Button
					className={s.create}
					Icon={Save}
				>
					Create hero
				</Button>
			</div>
		</form>
	);
}
