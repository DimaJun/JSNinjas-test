import s from './EditHeroPage.module.scss';

import { Page } from '@/shared/ui/Page';
import { classNames } from '@/shared/helpers';

export function EditHeroPage() {
	return <Page className={classNames(s.EditHeroPage, {}, [])}>EditHeroPage component</Page>;
}
