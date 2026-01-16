import s from './HeroDetailsTop.module.scss';

export function HeroDetailsTop() {
	return (
		<div className={s.top}>
			<h2 className={s.nick}>Superman</h2>
			<p className={s.realName}>Clark Kent</p>
		</div>
	);
}
