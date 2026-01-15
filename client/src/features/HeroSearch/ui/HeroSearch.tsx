import s from './HeroSearch.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';

export function HeroSearch() {
	return (
		<div className={classNames(s.HeroSearch, {}, [])}>
			<Input
				className={s.input}
				placeholder='Enter superhero nickname...'
			/>
		</div>
	);
}
