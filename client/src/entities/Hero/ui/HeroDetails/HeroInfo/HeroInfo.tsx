import { Info } from 'lucide-react';

import { HeroFormSectionTop } from '../../HeroForm/HeroFormSectionTop/HeroFormSectionTop';

import s from './HeroInfo.module.scss';

import { Card } from '@/shared/ui/Card';

export function HeroInfo() {
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
				<span>Nickname:</span> <span>Superman</span>
			</p>
			<p className={s.infoRow}>
				<span>Real name:</span> <span>Clark Kent</span>
			</p>
			<p className={s.infoRow}>
				<span>Superpowers:</span> <span>6</span>
			</p>
			<p className={s.infoRow}>
				<span>Photos:</span> <span>4</span>
			</p>
		</Card>
	);
}
