import { Zap } from 'lucide-react';

import { HeroFormSectionTop } from '../../HeroForm/HeroFormSectionTop/HeroFormSectionTop';
import { HeroTags } from '../../HeroForm/HeroTags/HeroTags';

import s from './HeroPowers.module.scss';

import { Card } from '@/shared/ui/Card';

interface HeroPowersProps {
	powers: string[];
}

export function HeroPowers({ powers }: HeroPowersProps) {
	return (
		<Card
			className={s.powers}
			padding='16'
		>
			<HeroFormSectionTop
				text='Superpowers'
				Icon={Zap}
			/>
			{powers.length > 0 ? (
				<HeroTags tags={powers} />
			) : (
				<p className={s.noPowers}>Superpowers not specified</p>
			)}
		</Card>
	);
}
