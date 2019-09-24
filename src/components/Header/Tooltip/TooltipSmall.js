import React from 'react';
import classes from './TooltipSmall.module.css';

const TooltipSmall = (props) => {
    return (
        <div className={classes.TooltipSm}>
            <input className={classes.InputSm}type='email' placeholder='Email' />
            <input className={classes.InputSm}type='password' placeholder='Password' />
            <button className={classes.ButtonSm}>Login</button>
        </div>
    )
}

export default TooltipSmall;