import { createContext } from 'react';

export interface FiltersContextProps {
	genre: string;
	pages: number;
	// Methods
	handleGenre(event: any): void;
	handleRange(event: any): void;
}

export const FiltersContext = createContext({} as FiltersContextProps);
