import s from './EditHeroPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function EditHeroPage() {
	return <div className={classNames(s.EditHeroPage, {}, [])}>EditHeroPage component</div>;
}
