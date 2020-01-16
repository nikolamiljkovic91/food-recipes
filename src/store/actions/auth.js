import * as actionTypes from './actionTypes'

export const signInStart = () => {
    return {
        type: actionTypes.SIGN_IN_START
    }
}

export const singInFail = (error) => {
    return {
        type: actionTypes.SIGN_IN_FAIL,
        error: error
    }
}

export const signInSuccess = () => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS
    }
}

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        dispatch(signInStart())
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch(signInSuccess())
            localStorage.setItem('auth', 'authenticated')
        }).catch((error) => {
            dispatch(singInFail(error))
        })
    }
}

export const signOutSuccess = () => {
    return {
        type: actionTypes.SIGN_OUT_SUCCESS
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch(signOutSuccess())
        })
    }
}