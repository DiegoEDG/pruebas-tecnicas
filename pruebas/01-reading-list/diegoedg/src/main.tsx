import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FiltersProvider, StoreProvider } from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider>
			<FiltersProvider>
				<App />
			</FiltersProvider>
		</StoreProvider>
	</React.StrictMode>
);
