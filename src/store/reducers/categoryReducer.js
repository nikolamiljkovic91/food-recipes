import * as actionTypes from '../actions/actionTypes';

const initialState = {
    similar: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_SIMILAR_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_SIMILAR_SUCCESS:
            return {
                ...state,
                similar: action.similar,
                loading: false
            }
        case actionTypes.FETCH_SIMILAR_FAIL:
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