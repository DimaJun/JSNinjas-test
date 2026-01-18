export { HeroesList } from './ui/HeroesList/HeroesList';
export { HeroForm } from './ui/HeroForm/HeroForm';
export { HeroEditForm } from './ui/HeroEditForm/HeroEditForm';
export { HeroDetails } from './ui/HeroDetails/HeroDetails';

export type { Hero } from './model/types/hero';
export {
	useGetAllHeroesQuery,
	useRemoveHeroMutation,
	useCreateHeroMutation,
	useGetHeroByIdQuery,
} from './api/heroes';
