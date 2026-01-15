import s from './HeroesList.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';

export function HeroesList() {
	return (
		<div className={s.List}>
			<Card padding='16'>
				<Avatar
					size={65}
					rounded
				/>
			</Card>
			<Card padding='16'>
				<Avatar
					size={65}
					rounded
				/>
			</Card>
			<Card padding='16'>
				<Avatar
					size={65}
					rounded
				/>
			</Card>
			<Card padding='16'>
				<Avatar
					size={65}
					rounded
				/>
			</Card>
			<Card padding='16'>
				<Avatar
					size={65}
					rounded
				/>
			</Card>
		</div>
	);
}
