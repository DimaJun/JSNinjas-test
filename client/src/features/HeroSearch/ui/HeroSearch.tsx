import { Filter } from 'lucide-react';

import s from './HeroSearch.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function HeroSearch() {
	return (
		<div className={classNames(s.HeroSearch, {}, [])}>
			<Input
				className={s.input}
				placeholder='Enter superhero nickname...'
			/>
			<Button
				padding='12'
				Icon={Filter}
			>
				Filters
			</Button>
		</div>
	);
}
