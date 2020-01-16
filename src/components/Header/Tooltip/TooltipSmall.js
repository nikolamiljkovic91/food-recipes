import React from 'react';
import { connect } from 'react-redux'
import classes from './TooltipSmall.module.css';

const TooltipSmall = (props) => {

    let errorMessageSm = (
        <p className={classes.ErrorSm}>Invalid Input!</p>
    )

    let tooltipSm = (
        <div className={classes.TooltipSm}>
            <button onClick={props.logoutClick} className={classes.LogoutButtonSm}>LOGOUT</button>
        </div> 
    )

    if(props.auth.uid){
        return tooltipSm
    }else{
        tooltipSm = (
            <form onSubmit={props.formSubmit}>
            <div className={classes.TooltipSm}>
                {props.authData.error && errorMessageSm}
                <input className={classes.InputSm}type='email' name='email' placeholder='Email' onChange={props.input} value={props.userAuth.email}/>
                <input className={classes.InputSm}type='password' name='password' placeholder='Password' onChange={props.input} value={props.userAuth.password}/>
                <button type='submit' className={classes.ButtonSm}>Login</button>
            </div>
        </form>
        )
    }
    return tooltipSm
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        authData: state.auth
    }
}

export default connect(mapStateToProps)(TooltipSmall);