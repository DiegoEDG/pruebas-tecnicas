import { StoreState } from './StoreProvider';

type StoreActionType = { type: '[Store] Add To List' };

const StoreReducer = (state: StoreState, action: StoreActionType): StoreState => {
	switch (action.type) {
		case '[Store] Add To List':
			return {
				...state
			};
		default:
			return state;
	}
};

export default StoreReducer;
