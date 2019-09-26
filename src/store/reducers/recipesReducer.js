import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    categories: [],
    error: false,
    loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.FETCH_CATEGORIES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.category,
                loading: false
            }
        case actionTypes.FETCH_CATEGORIES_FAIL:
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