import * as actionTypes from './actionTypes'

export const  authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: data
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: error
    }
}