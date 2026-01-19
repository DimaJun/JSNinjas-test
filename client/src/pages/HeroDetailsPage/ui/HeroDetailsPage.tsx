import { ArrowLeft, SquarePen, Trash } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';

import s from './HeroDetailsPage.module.scss';

import { getMainRoute } from '@/shared/config/router';
import { Button } from '@/shared/ui/Button';
import { useGetHeroByIdQuery } from '@/entities/Hero';
import { Page } from '@/shared/ui/Page';
import { classNames } from '@/shared/helpers';
import { useRemoveHeroMutation } from '@/features/HeroEdit';
import { HeroDetails, HeroDetailsSkeleton } from '@/features/HeroDetails';

function HeroDetailsPage() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const { data: hero, isError, isLoading } = useGetHeroByIdQuery({ id }, { skip: !id });

	const [removeHero] = useRemoveHeroMutation();

	if (!id) {
		return <div className={s.not_found}>Superhero not found!</div>;
	}

	if (isLoading) {
		return (
			<Page className={classNames(s.HeroDetails, {}, [])}>
				<HeroDetailsSkeleton />
			</Page>
		);
	}

	if (isError || !hero) {
		return <div className={s.not_found}>Superhero not found!</div>;
	}

	const handleRemoveHero = async () => {
		await removeHero({ id });
		navigate('/');
	};

	return (
		<Page className={classNames(s.HeroDetails, {}, [])}>
			<div className={s.top}>
				<Link
					className={s.backToList}
					to={getMainRoute()}
				>
					<ArrowLeft className={s.icon} />
					Back to list
				</Link>

				<div className={s.btns}>
					<Button
						className={s.remove}
						Icon={Trash}
						onClick={handleRemoveHero}
					>
						Remove
					</Button>
					<Button
						className={s.edit}
						Icon={SquarePen}
						onClick={() => navigate(`/hero/edit/${id}`)}
					>
						Edit
					</Button>
				</div>
			</div>
			<HeroDetails hero={hero} />
		</Page>
	);
}

export default HeroDetailsPage;
