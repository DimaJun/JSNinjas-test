export enum AppRoutes {
	MAIN = 'main',
	CREATE_HERO = 'create_hero',
	HERO_DETAILS = 'hero_details',
	HERO_EDIT = 'hero_edit',
}

export const getMainRoute = () => '/';
export const getCreateHeroRoute = () => '/hero/create';
export const getHeroDetailsRoute = () => '/hero/:id';
export const getHeroEditRoute = () => '/hero/edit/:id';
