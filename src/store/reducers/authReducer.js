import * as actionTypes from '../actions/actionTypes';

const initialState = 
    {
        error: false,
        loading: false
    }

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case actionTypes.SIGN_IN_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.SIGN_IN_FAIL:
        return { 
            ...state,
            error: true,
            loading: false
        }
        case actionTypes.SIGN_IN_SUCCESS:
            return {
            ...state,
            error: false,
            loading: false
        }
        case actionTypes.SIGN_OUT_SUCCESS:
            console.log('signout successful')
            return{
                ...state,
            }

        default:
            return state
    }
}

export default reducer;