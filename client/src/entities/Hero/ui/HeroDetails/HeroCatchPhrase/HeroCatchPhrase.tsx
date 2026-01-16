import s from './HeroCatchPhrase.module.scss';

import { Card } from '@/shared/ui/Card';

interface HeroCatchPhraseProps {
	phrase: string;
}

export function HeroCatchPhrase({ phrase }: HeroCatchPhraseProps) {
	return (
		<Card
			className={s.wrapper}
			padding='16'
		>
			<p className={s.phrase}>{phrase}</p>
		</Card>
	);
}
