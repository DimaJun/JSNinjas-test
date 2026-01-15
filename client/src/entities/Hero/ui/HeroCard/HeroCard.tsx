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
			<p className={s.nick}>Superman</p>
		</Card>
	);
}
