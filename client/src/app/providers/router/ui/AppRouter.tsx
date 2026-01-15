import { Route, Routes } from 'react-router';

import { routeConfig } from '../config/routeConfig';

export function AppRouter() {
	return (
		<Routes>
			{Object.values(routeConfig).map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={element}
				/>
			))}
		</Routes>
	);
}
