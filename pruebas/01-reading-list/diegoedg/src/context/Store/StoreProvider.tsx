import { FC, PropsWithChildren, useReducer } from 'react';
import StoreReducer from './StoreReducer';
import { StoreContext } from './StoreContext';
import { Book } from '../../interfaces';
import { library } from '../../data/books.json';

export interface StoreState {
	books: Book[];
	list: Book[];
}

const STORE_INITIAL_STATE: StoreState = {
	books: library.map((book) => book.book),
	list: []
};

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(StoreReducer, STORE_INITIAL_STATE);

	return <StoreContext.Provider value={{ ...state }}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
