import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    users: [{
        name: '',
        password: ''
    }],
    error: null,
    loading: false
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.actionTypes){
            case(actionTypes.AUTH_SUCCESS):
        return {...state, users: { name: action.payload, password: action.payload }}
        default:
            return state
    }
}