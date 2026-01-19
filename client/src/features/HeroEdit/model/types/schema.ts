import { z } from 'zod';

export const heroEditSchema = z.object({
	nickname: z.string(),
	realName: z.string().trim().min(2, 'Minimum 2 characters').max(40, 'Maximum 40 characters'),
	catchPhrase: z.string().trim().min(1, 'Required field').max(200, 'Maximum 200 characters'),
	originDescription: z
		.string()
		.trim()
		.min(1, 'Required field')
		.max(600, 'Maximum 600 characters'),
	superpowers: z.array(z.string().trim().min(1)).min(1, 'Add at least one superpower'),
});

export type HeroEditForm = z.infer<typeof heroEditSchema>;
