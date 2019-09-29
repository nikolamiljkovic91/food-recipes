import * as actionTypes from '../actions/actionTypes';

const initialState = {
    meals: [],
    error: false,
    loading: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
            case actionTypes.FETCH_MEALS_START:
            return {
                ...state,
                loading: true
            }
            case actionTypes.FETCH_MEALS_SUCCESS:
                return {
                    ...state,
                    meals: action.meals,
                    loading: false
                }
            case actionTypes.FETCH_MEALS_FAIL:
                return {
                    ...state,
                    error: true,
                    loading: false
                }
                    default:
                        return state
                    }
                }

export default reducer;