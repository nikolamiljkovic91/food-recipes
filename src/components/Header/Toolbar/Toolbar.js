import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Toolbar.module.css'
import HamburgerButton from '../SideDrawer/HamburgerButton';

const Toolbar = (props) => {
    return (
        <div className={classes.Nav}>
            <div>
                <HamburgerButton clicked={props.drawerClickHandler}/>
            </div>
            <input className={classes.Input} type='text'/>
            <div className={classes.Divide}></div>
            <ul className={classes.Ul}>
                <li>
                    <Link className={classes.Link} to="/">Home</Link>
                    <Link className={classes.Link} to="/">About Us</Link>
                    <Link className={classes.Link} to="/">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Toolbar;