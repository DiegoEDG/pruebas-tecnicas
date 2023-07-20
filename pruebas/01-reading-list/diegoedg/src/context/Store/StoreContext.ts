import { createContext } from 'react';
import { Book } from '../../interfaces';

export interface StoreContextProps {
	books: Book[];
	list: Book[];
	// Methods
	handleAddToList: (title: string) => void;
	hndlRemoveFromList: (title: string) => void;
}

export const StoreContext = createContext({} as StoreContextProps);
