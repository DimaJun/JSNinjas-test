import s from './HeroFormSectionTop.module.scss';

interface SectionTopProps {
	num: number;
	text: string;
}

export function HeroFormSectionTop({ num, text }: SectionTopProps) {
	return (
		<h3 className={s.top}>
			<span>0{num}</span>
			{text}
		</h3>
	);
}
