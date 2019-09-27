import * as actionTypes from '../actions/actionTypes';

const initialState = {
    randomMeal: [],
    loading: false,
    error: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_RANDOM_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_RANDOM_SUCCESS:
            return {
                ...state,
                randomMeal: action.randomMeal,
                loading: false
            }
        case actionTypes.FETCH_RANDOM_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default reducer