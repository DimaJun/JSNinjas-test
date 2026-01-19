import { Link, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';

import s from './EditHeroPage.module.scss';

import { Page } from '@/shared/ui/Page';
import { classNames } from '@/shared/helpers';
import { useGetHeroByIdQuery } from '@/entities/Hero';
import { HeroEditForm } from '@/features/HeroEdit';

function EditHeroPage() {
	const { id } = useParams<{ id: string }>();

	const { data: hero, isError } = useGetHeroByIdQuery({ id }, { skip: !id });

	if (isError || !hero) {
		return <div className={s.not_found}>Superhero not found!</div>;
	}

	return (
		<Page className={classNames(s.EditHeroPage, {}, [])}>
			<Link
				className={s.backToList}
				to={`/hero/${id}`}
			>
				<ArrowLeft className={s.icon} />
				Back to hero page
			</Link>
			<h2 className={s.pageName}>Update a Superhero</h2>
			<HeroEditForm hero={hero} />
		</Page>
	);
}

export default EditHeroPage;
