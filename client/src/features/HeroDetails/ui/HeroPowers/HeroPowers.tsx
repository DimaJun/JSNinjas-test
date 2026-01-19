import { Zap } from 'lucide-react';

import s from './HeroPowers.module.scss';

import { Card } from '@/shared/ui/Card';
import { FormSectionTop } from '@/features/HeroCreate';
import { HeroTags } from '@/entities/Hero';

interface HeroPowersProps {
	powers: string[];
}

export function HeroPowers({ powers }: HeroPowersProps) {
	return (
		<Card
			className={s.powers}
			padding='16'
		>
			<FormSectionTop
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
