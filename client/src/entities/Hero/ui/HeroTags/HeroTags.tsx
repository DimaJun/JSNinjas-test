import { Minus } from 'lucide-react';

import s from './HeroTags.module.scss';

import { classNames } from '@/shared/helpers';
import { Button } from '@/shared/ui/Button';

interface HeroTagsProps {
	className?: string;
	tags?: string[];
	onRemove?: (tag: string) => void;
}

export function HeroTags({ className, tags, onRemove }: HeroTagsProps) {
	return (
		<ul className={classNames(s.list, {}, [className])}>
			{tags.length > 0 &&
				tags.map((tag, index) => (
					<li key={`tag-${tag}-${index}`}>
						<span className={s.tag}>
							{tag}
							{onRemove && (
								<Button
									className={s.remove}
									Icon={Minus}
									onClick={() => onRemove(tag)}
								/>
							)}
						</span>
					</li>
				))}
		</ul>
	);
}
