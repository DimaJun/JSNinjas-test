import { Info } from 'lucide-react';

import { HeroFormSectionTop } from '../../HeroForm/HeroFormSectionTop/HeroFormSectionTop';

import s from './HeroInfo.module.scss';

import { Card } from '@/shared/ui/Card';

interface HeroInfoProps {
	nickname: string;
	realName: string;
	powersCount: number;
	photosCount: number;
}

export function HeroInfo({ nickname, photosCount, powersCount, realName }: HeroInfoProps) {
	return (
		<Card
			className={s.info}
			padding='16'
		>
			<HeroFormSectionTop
				text='Information'
				Icon={Info}
			/>
			<p className={s.infoRow}>
				<span>Nickname:</span> <span>{nickname}</span>
			</p>
			<p className={s.infoRow}>
				<span>Real name:</span> <span>{realName}</span>
			</p>
			<p className={s.infoRow}>
				<span>Superpowers:</span> <span>{powersCount}</span>
			</p>
			<p className={s.infoRow}>
				<span>Photos:</span> <span>{photosCount}</span>
			</p>
		</Card>
	);
}
