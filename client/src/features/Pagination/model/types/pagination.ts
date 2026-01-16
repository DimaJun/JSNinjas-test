import { Hero } from '@/entities/Hero';

export interface HeroesResponse {
	heroes: Hero[];
	meta: {
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}
