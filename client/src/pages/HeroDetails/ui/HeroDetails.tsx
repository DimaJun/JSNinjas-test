import s from './HeroDetails.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function HeroDetails() {
	return <div className={classNames(s.HeroDetails, {}, [])}>HeroDetails component</div>;
}
