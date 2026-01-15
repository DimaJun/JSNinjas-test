import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';

import '@/app/styles/main.scss';

const container = document.getElementById('root');

if (!container) {
	throw new Error('No root container to render!');
}

createRoot(container).render(
	<App />
);
