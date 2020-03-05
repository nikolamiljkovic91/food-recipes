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

export const signUpStart = () => {
    return {
        type: actionTypes.SIGN_UP_START

    }
}

export const signUpFail = (error) => {
    return {
        type: actionTypes.SIGN_UP_FAIL,
        error: error
    }
}

export const signUpSuccess = () => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        dispatch(signUpStart())
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
                firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch(signUpSuccess())
            localStorage.setItem('auth', 'authenticated')
        }).catch((error) => {
            dispatch(signUpFail(error))       
        })
    }
}