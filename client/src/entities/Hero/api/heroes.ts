import { Hero } from '../model/types/hero';

import { baseApi } from '@/shared/config/api';
import { HeroesResponse } from '@/features/Pagination';

const heroApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllHeroes: builder.query<HeroesResponse, { page: number; limit: number }>({
			query: ({ page, limit }) => ({
				url: '/superhero/all',
				method: 'GET',
				params: { page, limit },
			}),
		}),
		getHeroById: builder.query<Hero, { id: string }>({
			query: ({ id }) => ({
				url: `/superhero/${id}`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetAllHeroesQuery } = heroApi;
export const { useGetHeroByIdQuery } = heroApi;
