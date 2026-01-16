import { LucideIcon } from 'lucide-react';

import s from './HeroFormSectionTop.module.scss';

interface SectionTopProps {
	num?: number;
	Icon?: LucideIcon;
	text: string;
}

export function HeroFormSectionTop({ num, text, Icon }: SectionTopProps) {
	return (
		<h3 className={s.top}>
			{num && <span>0{num}</span>}
			{Icon && <Icon />}
			{text}
		</h3>
	);
}
