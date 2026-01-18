import { CreateHeroFormChange } from '../../model/types/create';
import { FormSectionTop } from '../FormSectionTop/FormSectionTop';

import s from './FormMainInfo.module.scss';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

interface FormMainInfoProps {
	nickname: string;
	realName: string;
	catchPhrase: string;
	onChange: CreateHeroFormChange;
	isEdit?: boolean;
}

export function FormMainInfo(props: FormMainInfoProps) {
	const { nickname, realName, catchPhrase, onChange, isEdit = false } = props;

	return (
		<Card
			className={s.formSection}
			padding='24'
		>
			<FormSectionTop
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
