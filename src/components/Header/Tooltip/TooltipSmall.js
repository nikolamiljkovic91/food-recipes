import React from 'react';
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

    if(props.userAuth.isAuth){
        return tooltipSm
    }else{
        tooltipSm = (
            <form onSubmit={props.formSubmit}>
                {props.userAuth.error && errorMessageSm}
            <div className={classes.TooltipSm}>
                <input className={classes.InputSm}type='email' name='email' placeholder='Email' onChange={props.input} value={props.userAuth.email}/>
                <input className={classes.InputSm}type='password' name='password' placeholder='Password' onChange={props.input} value={props.userAuth.password}/>
                <button type='submit' className={classes.ButtonSm}>Login</button>
            </div>
        </form>
        )
    }
    return tooltipSm
}

export default TooltipSmall;