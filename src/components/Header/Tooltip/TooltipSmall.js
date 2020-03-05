import React, { useState } from 'react';
import { connect } from 'react-redux'
import classes from './TooltipSmall.module.css';

const TooltipSmall = (props) => {

    const[signIn, setSignIn] = useState(false)
    const[signUp, setSignUp] = useState(false)

    let logoutTooltipSm = (
        <div className={classes.TooltipSm}>
            {!props.authData.loading ? <button onClick={props.logoutClick} className={classes.LogoutButtonSm}>LOGOUT</button> : <p>Loading...</p>}
        </div> 
    )

    let signUpSignInSm = (
        <div className={classes.TooltipSm}>
            <div>
            <button className={classes.ButtonSIUSm} onClick={() => setSignUp(true)}>SignUp</button>
            <button className={classes.ButtonSIUSm} onClick={() => setSignIn(true)}>SignIn</button>
            </div>
        </div>
    )

    let signInTooltipSm = (
        <form onSubmit={props.formSubmit}>
        <div className={classes.TooltipSm}>
            <input className={classes.InputSm} type='email' name='email' placeholder='Email' onChange={props.input} value={props.userAuth.user.email}/>
            <input className={classes.InputSm} type='password' name='password' placeholder='Password' onChange={props.input} value={props.userAuth.user.password}/>
            <button type='submit' className={classes.ButtonSm} onClick={props.formSubmit}>Login</button>
            {props.userAuth.error ? <p className={classes.ErrorSm}>{props.authData.signInError}</p> : <p className={classes.ErrorSm}></p>}
        </div>
    </form>
    )

    let signUpTooltipSm = (
        <form onSubmit={props.formSubmit}>
            <div className={classes.TooltipSIUSm}>
            <input className={classes.InputSm} type='firstName' name='firstName' placeholder='First name' onChange={props.signUpHandler} value={props.userAuth.signUp.firstName}/>
            <input className={classes.InputSm} type='lastName' name='lastName' placeholder='Last name' onChange={props.signUpHandler} value={props.userAuth.signUp.lastName}/>
            <input className={classes.InputSm} type='email' name='email' placeholder='Email' onChange={props.signUpHandler} value={props.userAuth.signUp.email}/>
            <input className={classes.InputSm} type='password' name='password' placeholder='Password' onChange={props.signUpHandler} value={props.userAuth.signUp.password}/>
            <button type='submit' className={classes.ButtonSm} onClick={props.signUp}>SignUp</button>
            {props.userAuth.error ? <p className={classes.ErrorSm}>{props.authData.signUpError}</p> : <p className={classes.ErrorSm}></p>}
            </div>
        </form>
    )

    if(signIn){
        return !props.auth.uid ? signInTooltipSm : logoutTooltipSm
    }else if(signUp){
        return !props.auth.uid ? signUpTooltipSm : logoutTooltipSm
    }else{
        return !props.auth.uid ? signUpSignInSm : logoutTooltipSm
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authData: state.auth
    }
}

export default connect(mapStateToProps)(TooltipSmall);