import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

import s from './CreateHeroPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { getMainRoute } from '@/shared/config/router';
import { HeroForm } from '@/entities/Hero';

export function CreateHeroPage() {
	return (
		<div className={classNames(s.CreateHeroPage, {}, [])}>
			<Link
				className={s.backToList}
				to={getMainRoute()}
			>
				<ArrowLeft className={s.icon} />
				Back to list
			</Link>
			<h2 className={s.pageName}>Create a Superhero</h2>
			<HeroForm />
		</div>
	);
}
