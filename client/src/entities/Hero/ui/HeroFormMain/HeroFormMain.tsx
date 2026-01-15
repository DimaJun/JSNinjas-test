import { HeroFormSectionTop } from '../HeroFormSectionTop/HeroFormSectionTop';

import s from './HeroFormMain.module.scss';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

export function HeroFormMain() {
	return (
		<Card
			className={s.formSection}
			padding='24'
		>
			<HeroFormSectionTop
				num={1}
				text='Basic information'
			/>
			<div className={s.inputs}>
				<Input
					label='Superhero nickname'
					placeholder='Superman'
				/>
				<Input
					label='Real name'
					placeholder='Clark Kent'
				/>
				<Input
					label='Catch phrase'
					placeholder='Look, up in the sky, its a bird, its a plane, its Superman!'
				/>
			</div>
		</Card>
	);
}
