import { HeroTags } from '../HeroTags/HeroTags';

import s from './HeroCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';

export function HeroCard() {
	return (
		<Card
			className={s.Card}
			padding={'16'}
		>
			<Avatar
				rounded
				size={65}
			/>
			<div className={s.info}>
				<p className={s.nick}>Superman</p>
				<p className={s.description}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi nostrum,
					numquam ullam velit voluptas...
				</p>
				<HeroTags />
			</div>
		</Card>
	);
}
