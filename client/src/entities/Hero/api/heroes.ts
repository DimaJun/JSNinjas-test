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
			providesTags: (result) =>
				result
					? [
							{ type: 'Hero', id: 'LIST' },
							...result.heroes.map(({ id }) => ({ type: 'Hero' as const, id })),
						]
					: [{ type: 'Hero', id: 'LIST' }],
		}),
		getHeroById: builder.query<Hero, { id: string }>({
			query: ({ id }) => ({
				url: `/superhero/${id}`,
				method: 'GET',
			}),
			providesTags: (result) =>
				result ? [{ type: 'Hero' as const, id: result.id }] : ['Hero'],
		}),
	}),
});

export const { useGetAllHeroesQuery } = heroApi;
export const { useGetHeroByIdQuery } = heroApi;
