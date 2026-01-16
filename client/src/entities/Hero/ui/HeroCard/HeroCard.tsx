import { Link } from 'react-router';

import { serverStaticImagesUrl } from '../../consts/hero';

import s from './HeroCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';

interface HeroCardProps {
	id: string;
	nickname: string;
	avatar?: string;
}

export function HeroCard({ id, nickname, avatar }: HeroCardProps) {
	return (
		<Link to={`/hero/${id}`}>
			<Card
				className={s.Card}
				padding={'16'}
			>
				<Avatar
					src={`${serverStaticImagesUrl}/${avatar}`}
					rounded
					size={65}
				/>
				<p className={s.nick}>{nickname}</p>
			</Card>
		</Link>
	);
}
