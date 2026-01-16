import { ArrowLeft, SquarePen } from 'lucide-react';
import { Link } from 'react-router';

import s from './HeroDetailsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { getMainRoute } from '@/shared/config/router';
import { Button } from '@/shared/ui/Button';
import { HeroDetails } from '@/entities/Hero';

export function HeroDetailsPage() {
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
				<Button
					className={s.edit}
					Icon={SquarePen}
				>
					Edit
				</Button>
			</div>
			<HeroDetails />
		</div>
	);
}
