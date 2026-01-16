import { HeroFormSectionTop } from '../HeroFormSectionTop/HeroFormSectionTop';
import { HeroFormChange } from '../HeroForm';

import s from './HeroFormStory.module.scss';

import { Card } from '@/shared/ui/Card';
import { Textarea } from '@/shared/ui/Textarea';

interface HeroFormStoryProps {
	story: string;
	onChange: HeroFormChange;
}

export function HeroFormStory(props: HeroFormStoryProps) {
	const { story, onChange } = props;

	return (
		<Card padding='24'>
			<HeroFormSectionTop
				num={2}
				text='Origin description'
			/>
			<Textarea
				className={s.textarea}
				label='Tell the hero story'
				placeholder='He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction...'
				rows={4}
				value={story}
				onChange={(e) => onChange('originDescription', e.target.value)}
			/>
			<p className={s.symbols}>{story.length} characters</p>
		</Card>
	);
}
