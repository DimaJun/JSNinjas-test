import { ArrowLeft, SquarePen } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';

import s from './HeroDetailsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { getMainRoute } from '@/shared/config/router';
import { Button } from '@/shared/ui/Button';
import { HeroDetails } from '@/entities/Hero';
import { useGetHeroByIdQuery, useRemoveHeroMutation } from '@/entities/Hero/api/heroes';

export function HeroDetailsPage() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const { data: hero, isError } = useGetHeroByIdQuery({ id }, { skip: !id });

	const [removeHero] = useRemoveHeroMutation();

	if (!id) {
		return <div className={s.not_found}>Superhero not found!</div>;
	}

	if (isError || !hero) {
		return <div className={s.not_found}>Superhero not found!</div>;
	}

	const handleRemoveHero = async () => {
		await removeHero({ id });
		navigate('/');
	};

	return (
		<div className={classNames(s.HeroDetails, {}, [])}>
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
						className={s.edit}
						Icon={SquarePen}
						onClick={handleRemoveHero}
					>
						Remove
					</Button>
					<Button
						className={s.edit}
						Icon={SquarePen}
					>
						Edit
					</Button>
				</div>
			</div>
			<HeroDetails hero={hero} />
		</div>
	);
}
