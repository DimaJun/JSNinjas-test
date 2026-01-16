import s from './HeroCatchPhrase.module.scss';

import { Card } from '@/shared/ui/Card';

export function HeroCatchPhrase() {
	return (
		<Card
			className={s.wrapper}
			padding='16'
		>
			<p className={s.phrase}>Truth, Justice, and the American Way</p>
		</Card>
	);
}
