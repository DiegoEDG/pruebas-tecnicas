import { FC, PropsWithChildren, useReducer } from 'react';
import FiltersReducer from './FiltersReducer';
import { FiltersContext } from './FiltersContext';

export interface FiltersState {
	genre: string;
	pages: number;
}

const FILTERS_INITIAL_STATE: FiltersState = {
	genre: '-',
	pages: 40
};

const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(FiltersReducer, FILTERS_INITIAL_STATE);

	const handleGenre = (event: any) => {
		dispatch({ type: '[Filters] Change Genre', payload: event.target.value });
	};
	const handleRange = (event: any) => {
		dispatch({ type: '[Filters] Change Range', payload: Number(event.target.value) });
	};

	return (
		<FiltersContext.Provider
			value={{
				...state,
				// Methods
				handleGenre,
				handleRange
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
};

export default FiltersProvider;
