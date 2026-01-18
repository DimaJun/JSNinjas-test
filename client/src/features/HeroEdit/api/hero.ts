import { baseApi } from '@/shared/config/api';
import { Hero } from '@/entities/Hero';

const editHeroApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		updateHero: builder.mutation<Hero, { id: string; formData: FormData }>({
			query: ({ id, formData }) => ({
				url: `/superhero/update/${id}`,
				method: 'PATCH',
				body: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
		}),
		removeHero: builder.mutation<void, { id: string }>({
			query: ({ id }) => ({
				url: `/superhero/remove/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const { useUpdateHeroMutation } = editHeroApi;
export const { useRemoveHeroMutation } = editHeroApi;
