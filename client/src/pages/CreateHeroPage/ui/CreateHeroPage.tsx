import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

import s from './CreateHeroPage.module.scss';

import { getMainRoute } from '@/shared/config/router';
import { Page } from '@/shared/ui/Page';
import { classNames } from '@/shared/helpers';
import { HeroCreateForm } from '@/features/HeroCreate';

function CreateHeroPage() {
	return (
		<Page className={classNames(s.CreateHeroPage, {}, [])}>
			<Link
				className={s.backToList}
				to={getMainRoute()}
			>
				<ArrowLeft className={s.icon} />
				Back to list
			</Link>
			<h2 className={s.pageName}>Create a Superhero</h2>
			<HeroCreateForm />
		</Page>
	);
}

export default CreateHeroPage;
