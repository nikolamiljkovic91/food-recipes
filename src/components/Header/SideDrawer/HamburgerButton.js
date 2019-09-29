import React from 'react';
import classes from './HamburgerButton.module.css';

const HamburgerButton = (props) => {
    return (
        <button className={classes.Button} onClick={props.clicked}>
            <div className={classes.ButtonLine}></div>
            <div className={classes.ButtonLine}></div>
            <div className={classes.ButtonLine}></div>
        </button>
    )
}

export default HamburgerButton;