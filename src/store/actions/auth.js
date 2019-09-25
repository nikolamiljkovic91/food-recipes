import * as actionTypes from './actionTypes'

export const  auth = (data) => {
    return {
        type: actionTypes.AUTH_USER,
        payload: data
    }
};
