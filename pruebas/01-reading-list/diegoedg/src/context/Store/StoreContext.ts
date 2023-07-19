import { createContext } from 'react';
import { Book } from '../../interfaces';

export interface StoreContextProps {
	books: Book[];
	list: Book[];
}

export const StoreContext = createContext({} as StoreContextProps);
