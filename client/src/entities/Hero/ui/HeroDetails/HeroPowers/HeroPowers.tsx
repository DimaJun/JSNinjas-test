import { Zap } from 'lucide-react';

import { HeroFormSectionTop } from '../../HeroForm/HeroFormSectionTop/HeroFormSectionTop';

import s from './HeroPowers.module.scss';

import { Card } from '@/shared/ui/Card';

export function HeroPowers() {
	return (
		<Card
			className={s.powers}
			padding='16'
		>
			<HeroFormSectionTop
				text='Superpowers'
				Icon={Zap}
			/>
			<p className={s.noPowers}>Superpowers not specified</p>
		</Card>
	);
}
