import * as actionTypes from '../actions/actionTypes';

const initialState = {
    authRoute: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.CHECK_AUTH):
        return {
            ...state,
            authRoute: true
        }
        case(actionTypes.CHECK_LOGOUT):
        return {
            ...state,
            authRoute: false
        }
        default:
            return state
    }
};



export default reducer;