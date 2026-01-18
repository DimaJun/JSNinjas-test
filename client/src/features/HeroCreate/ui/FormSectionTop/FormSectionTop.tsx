import { LucideIcon } from 'lucide-react';

import s from './FormSectionTop.module.scss';

interface SectionTopProps {
	num?: number;
	Icon?: LucideIcon;
	text: string;
}

export function FormSectionTop({ num, text, Icon }: SectionTopProps) {
	return (
		<h3 className={s.top}>
			{num && <span>0{num}</span>}
			{Icon && <Icon />}
			{text}
		</h3>
	);
}
