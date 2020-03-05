import * as actionTypes from '../actions/actionTypes';

const initialState = 
    {
        signInError: null,
        signUpError: null,
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
            signInError: action.error.message,
            loading: false
        }
        case actionTypes.SIGN_IN_SUCCESS:
            return {
            ...state,
            signInError: null,
            loading: false
        }
        case actionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
            }
        case actionTypes.SIGN_UP_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.SIGN_UP_FAIL:
            return{
                ...state,
                loading: false,
                signUpError: action.error.message
            }
        case actionTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
                loading: false,
                signUpError: null
            }

        default:
            return state
    }
}

export default reducer;