import s from './HeroTags.module.scss';

import { classNames } from '@/shared/helpers';

interface HeroTagsProps {
	className?: string;
	tags?: string[];
}

export function HeroTags({ className, tags }: HeroTagsProps) {
	return (
		<ul className={classNames(s.list, {}, [className])}>
			{tags.length > 0 &&
				tags.map((tag) => (
					<li key={tag}>
						<span className={s.tag}>{tag}</span>
					</li>
				))}
		</ul>
	);
}
