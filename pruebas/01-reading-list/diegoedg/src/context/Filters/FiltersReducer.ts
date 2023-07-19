import { FiltersState } from './FiltersProvider';

type FiltersActionType =
	| { type: '[Filters] Change Genre'; payload: string }
	| { type: '[Filters] Change Range'; payload: number };

const FiltersReducer = (state: FiltersState, action: FiltersActionType): FiltersState => {
	switch (action.type) {
		case '[Filters] Change Genre':
			return {
				...state,
				genre: action.payload
			};
		case '[Filters] Change Range':
			return {
				...state,
				pages: action.payload
			};
		default:
			return state;
	}
};

export default FiltersReducer;
