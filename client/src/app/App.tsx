import { Link } from 'react-router';
import { PencilLine } from 'lucide-react';

import { AppRouter } from './providers/router/ui/AppRouter';

import { getCreateHeroRoute } from '@/shared/config/router';

export function App() {
	return (
		<div className='app'>
			<div className='top'>
				<h1>superhero db</h1>
				<Link
					className='create'
					to={getCreateHeroRoute()}
				>
					<PencilLine className='icon' />
					Create hero
				</Link>
			</div>
			<AppRouter />
		</div>
	);
}
