import { HeroSearch } from '@/features/HeroSearch';
import { HeroesList } from '@/entities/Hero/ui/HeroesList/HeroesList';

export function App() {
	return (
		<div className='app'>
			<h1>superhero db</h1>
			<HeroSearch />
			<HeroesList />
		</div>
	);
}
