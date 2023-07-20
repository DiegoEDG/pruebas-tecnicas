import { FC, PropsWithChildren, useReducer, useContext } from 'react';
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

	console.log(state);

	const handleAddToList = (title: string) => {
		dispatch({ type: '[Store] Add To List', payload: title });
	};
	const hndlRemoveFromList = (title: string) => {
		dispatch({ type: '[Store] Remove From List', payload: title });
	};

	return (
		<StoreContext.Provider
			value={{
				...state,
				//Methods
				handleAddToList,
				hndlRemoveFromList
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreProvider;
