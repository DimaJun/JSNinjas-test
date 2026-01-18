import { CreateHeroFormData } from '@/features/HeroCreate';

export interface EditHeroFormData extends CreateHeroFormData {
	currentImages: string[];
	imagesToRemove: string[];
}

export type EditHeroFormChange = <K extends keyof EditHeroFormData>(
	field: K,
	value: EditHeroFormData[K]
) => void;
