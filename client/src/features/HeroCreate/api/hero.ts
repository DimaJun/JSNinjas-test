import { baseApi } from '@/shared/config/api';

const createHeroApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createHero: builder.mutation<{ id: string }, FormData>({
			query: (formData) => ({
				url: `/superhero/create`,
				method: 'POST',
				body: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
			invalidatesTags: (result) => [
				{ type: 'Hero', id: 'LIST' },
				{ type: 'Hero', id: result?.id },
			],
		}),
	}),
});

export const { useCreateHeroMutation } = createHeroApi;
