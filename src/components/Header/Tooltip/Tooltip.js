import React, { useState } from 'react';
import classes from './Tooltip.module.css';
import { connect } from 'react-redux'
 

const Tooltip = (props) => {
    console.log(props)
    
    const[signIn, setSignIn] = useState(false)
    const[signUp, setSignUp] = useState(false)
    
    let logoutTooltip = (
        <div className={classes.Tooltip}>
            {!props.authData.loading ? <button onClick={props.logoutClick} className={classes.LogoutButton}>LOGOUT</button> : <p>Loading...</p>}
        </div> 
    )

    let signUpSignIn = (
        <div className={classes.Tooltip}>
            <div>
            <button className={classes.ButtonSIU} onClick={() => setSignUp(true)}>SignUp</button>
            <button className={classes.ButtonSIU} onClick={() => setSignIn(true)}>SignIn</button>
            </div>
        </div>
    )

    let signInTooltip = (
        <form onSubmit={props.formSubmit}>
        <div className={classes.Tooltip}>
            <input className={classes.Input} type='email' name='email' placeholder='Email' onChange={props.input} value={props.userAuth.user.email}/>
            <input className={classes.Input} type='password' name='password' placeholder='Password' onChange={props.input} value={props.userAuth.user.password}/>
            <button type='submit' className={classes.Button} onClick={props.formSubmit}>Login</button>
            {props.userAuth.error ? <p className={classes.Error}>{props.authData.signInError}</p> : <p className={classes.Error}></p>}
        </div>
    </form>
    )

    let signUpTooltip = (
        <form onSubmit={props.formSubmit}>
            <div className={classes.TooltipSIU}>
            <input className={classes.Input} type='firstName' name='firstName' placeholder='First name' onChange={props.signUpHandler} value={props.userAuth.signUp.firstName}/>
            <input className={classes.Input} type='lastName' name='lastName' placeholder='Last name' onChange={props.signUpHandler} value={props.userAuth.signUp.lastName}/>
            <input className={classes.Input} type='email' name='email' placeholder='Email' onChange={props.signUpHandler} value={props.userAuth.signUp.email}/>
            <input className={classes.Input} type='password' name='password' placeholder='Password' onChange={props.signUpHandler} value={props.userAuth.signUp.password}/>
            <button type='submit' className={classes.Button} onClick={props.signUp}>SignUp</button>
            {props.userAuth.error ? <p className={classes.Error}>{props.authData.signUpError}</p> : <p className={classes.Error}></p>}
            </div>
        </form>
    )

    // if(props.auth.uid){
    //     return tooltip
    // }else if(props.auth.loading){
    //     return <div><p>Loading...</p></div>
    // }else{
    //     tooltip = (
    //         <form onSubmit={props.formSubmit}>
    //         <div className={classes.Tooltip}>
    //             <input className={classes.Input} type='email' name='email' placeholder='Email' onChange={props.input} value={props.userAuth.user.email}/>
    //             <input className={classes.Input} type='password' name='password' placeholder='Password' onChange={props.input} value={props.userAuth.user.password}/>
    //             <button type='submit' className={classes.Button} onClick={props.formSubmit}>Login</button>
    //             {props.authData.error && errorMessage}
    //         </div>
    //     </form>
    //     )
    // }

    if(signIn){
        return !props.auth.uid ? signInTooltip : logoutTooltip
    }else if(signUp){
        return !props.auth.uid ? signUpTooltip : logoutTooltip
    }else{
        return !props.auth.uid ? signUpSignIn : logoutTooltip
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        authData: state.auth
    }
}


export default connect(mapStateToProps)(Tooltip);