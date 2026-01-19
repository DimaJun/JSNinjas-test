import s from './HeroDetailsTop.module.scss';

interface HeroDetailsTopProps {
	nickname: string;
	realName?: string;
}

export function HeroDetailsTop({ nickname, realName }: HeroDetailsTopProps) {
	return (
		<div className={s.top}>
			<h2 className={s.nick}>{nickname}</h2>
			{realName ? (
				<p className={s.realName}>{realName}</p>
			) : (
				<p className={s.realName}>No real name</p>
			)}
		</div>
	);
}
