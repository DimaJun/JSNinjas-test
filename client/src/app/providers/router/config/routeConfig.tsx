import { ReactNode } from 'react';

import {
	AppRoutes,
	getCreateHeroRoute,
	getHeroDetailsRoute,
	getHeroEditRoute,
	getMainRoute,
} from '@/shared/config/router';
import { MainPage } from '@/pages/MainPage';
import { CreateHeroPage } from '@/pages/CreateHeroPage';
import { HeroDetails } from '@/pages/HeroDetails';
import { EditHeroPage } from '@/pages/EditHeroPage';

export interface RouteItem {
	path: string;
	element: ReactNode;
}

export const routeConfig: Record<AppRoutes, RouteItem> = {
	[AppRoutes.MAIN]: {
		path: getMainRoute(),
		element: <MainPage />,
	},
	[AppRoutes.CREATE_HERO]: {
		path: getCreateHeroRoute(),
		element: <CreateHeroPage />,
	},
	[AppRoutes.HERO_DETAILS]: {
		path: getHeroDetailsRoute(),
		element: <HeroDetails />,
	},
	[AppRoutes.HERO_EDIT]: {
		path: getHeroEditRoute(),
		element: <EditHeroPage />,
	},
};
