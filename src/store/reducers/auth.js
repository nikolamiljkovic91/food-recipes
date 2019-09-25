import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    users: [{
        name: 'test@test.com',
        password: 'test123'
    }],
    isAuth: false,
    error: null
}

 const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.actionTypes){
            case(actionTypes.AUTH_USER):
        return  {...state, isAuth: true}
        default:
            return state
    }
}

export default authReducer;