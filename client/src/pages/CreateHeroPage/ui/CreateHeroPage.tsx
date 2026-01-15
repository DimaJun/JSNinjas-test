import s from './CreateHeroPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function CreateHeroPage() {
	return <div className={classNames(s.CreateHeroPage, {}, [])}>CreateHeroPage component</div>;
}
