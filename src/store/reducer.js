import * as actionTypes from './actions';
import data from './../shared/data';

const initialState = data;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_ITEM:
            const myList = state.myList.filter((item, index) => {
                return index !== action.ind;
            });
            return {
                ...state,
                myList: [...myList]
            };
        case actionTypes.ADD_ITEM:
            const stateList = state.myList;

            if (stateList.indexOf(action.item) === -1) {
                stateList.push(action.item);
            }
            return {
                ...state,
                myList: [...stateList]
            };
        default:
            return state;
    }
};

export default reducer;