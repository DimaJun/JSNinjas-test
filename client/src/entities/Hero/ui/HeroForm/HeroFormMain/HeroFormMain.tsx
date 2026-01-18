import { HeroFormSectionTop } from '../HeroFormSectionTop/HeroFormSectionTop';
import { HeroFormChange } from '../HeroForm';

import s from './HeroFormMain.module.scss';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

interface HeroFormMainProps {
	nickname: string;
	realName: string;
	catchPhrase: string;
	onChange: HeroFormChange;
	isEdit?: boolean;
}

export function HeroFormMain(props: HeroFormMainProps) {
	const { nickname, realName, catchPhrase, onChange, isEdit = false } = props;

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
					disabled={isEdit}
					value={nickname}
					onChange={(e) => onChange('nickname', e.target.value)}
				/>
				<Input
					label='Real name'
					placeholder='Clark Kent'
					value={realName}
					onChange={(e) => onChange('realName', e.target.value)}
				/>
				<Input
					label='Catch phrase'
					placeholder='Look, up in the sky, its a bird, its a plane, its Superman!'
					value={catchPhrase}
					onChange={(e) => onChange('catchPhrase', e.target.value)}
				/>
			</div>
		</Card>
	);
}
