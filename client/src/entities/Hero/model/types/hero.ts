export interface Hero {
	id: string;
	nickname: string;
	realName: string;
	originDescription: string;
	superpowers: string[];
	catchPhrase: string;
	images: string[];
}

export interface CreateHeroFormData extends Omit<Hero, 'images' | 'id'> {
	images: File[];
}

export interface EditHeroFormData extends CreateHeroFormData {
	currentImages: string[];
	imagesToRemove: string[];
}
