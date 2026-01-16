import { baseApi } from '@/shared/config/api';
import { HeroesResponse } from '@/features/Pagination/model/types/pagination';
import { Hero } from '@/entities/Hero';

export const heroApi = baseApi.injectEndpoints({
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
		createHero: builder.mutation<{ id: string }, FormData>({
			query: (formData) => ({
				url: `/superhero/create`,
				method: 'POST',
				body: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
		}),
	}),
});

export const { useGetAllHeroesQuery } = heroApi;
export const { useGetHeroByIdQuery } = heroApi;
export const { useCreateHeroMutation } = heroApi;
