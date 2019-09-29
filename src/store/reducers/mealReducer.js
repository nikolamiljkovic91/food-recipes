import * as actionTypes from '../actions/actionTypes';

const initialState = {
    meal: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_MEAL_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MEAL_SUCCESS:
            return {
                ...state,
                meal: action.meal,
                loading: false
            }
        case actionTypes.FETCH_MEAL_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default reducer;