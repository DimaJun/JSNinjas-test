import { Hero } from '@/entities/Hero';

export interface CreateHeroFormData extends Omit<Hero, 'images' | 'id'> {
	images: File[];
}

export type CreateHeroFormChange = <K extends keyof CreateHeroFormData>(
	field: K,
	value: CreateHeroFormData[K]
) => void;

export interface ImageItem {
	id: string;
	file: File;
	preview: string;
}
