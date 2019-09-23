import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideDrawer.module.css'

const SideDrawer = (props) => {
    return (
        <div className={props.show ? classes.SideDrawerOpen : classes.SideDrawer} onClick={props.click}>
            <ul className={classes.DrawerList}>
                <Link className={classes.DrawerLink}to='/'>Home</Link>
                <Link className={classes.DrawerLink}to='/'>About Us</Link>
                <Link className={classes.DrawerLink}to='/'>Contact</Link>
            </ul>
        </div>
    )
}

export default SideDrawer;