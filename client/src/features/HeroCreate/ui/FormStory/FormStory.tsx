import { CreateHeroFormChange } from '../../model/types/create';
import { FormSectionTop } from '../FormSectionTop/FormSectionTop';

import s from './FormStory.module.scss';

import { Card } from '@/shared/ui/Card';
import { Textarea } from '@/shared/ui/Textarea';

interface FormStoryProps {
	story: string;
	onChange: CreateHeroFormChange;
}

export function FormStory(props: FormStoryProps) {
	const { story, onChange } = props;

	return (
		<Card padding='24'>
			<FormSectionTop
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
