import { StoreState } from './StoreProvider';

type StoreActionType =
	| { type: '[Store] Add To List'; payload: string }
	| { type: '[Store] Remove From List'; payload: string };

const StoreReducer = (state: StoreState, action: StoreActionType): StoreState => {
	switch (action.type) {
		case '[Store] Add To List':
			return {
				...state,
				books: state.books.filter((book) => book.title != action.payload),
				list: [...state.list].concat(state.books.filter((book) => book.title === action.payload))
			};
		case '[Store] Remove From List':
			return {
				...state,
				list: state.list.filter((book) => book.title != action.payload),
				books: [...state.books].concat(state.list.filter((book) => book.title === action.payload))
			};
		default:
			return state;
	}
};

export default StoreReducer;
