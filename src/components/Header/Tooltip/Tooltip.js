import React from 'react';
import classes from './Tooltip.module.css';

import { connect } from 'redux';

const Tooltip = (props) => {
    return (
        <form>
            <div className={classes.Tooltip}>
                <input className={classes.Input}type='email' placeholder='Email'/>
                <input className={classes.Input}type='password' placeholder='Password'/>
                <button className={classes.Button}>Login</button>
            </div>
        </form>
    )
}

export default Tooltip;