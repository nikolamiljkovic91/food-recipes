import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideDrawer.module.css'
import Avatar from '../../../assets/icons/avatar.png'
import TooltipSmall from '../Tooltip/TooltipSmall';

const SideDrawer = (props) => {

    let path = window.location.pathname;


        let showTooltip = null;
        if(props.tooltip){
            showTooltip = <TooltipSmall signUp={props.onSignUp} signUpHandler={props.signUp} input={props.onInputChange} userAuth={props.authUser} formSubmit={props.authForm} logoutClick={props.logoutButton}/>
        }

        return (
            <div className={props.show ? classes.SideDrawerOpen : classes.SideDrawer}>
                <ul className={classes.DrawerList}>
                <div className={classes.ImgContainer}>
                {path !== '/' ? <Link className={classes.DrawerLinkHome} to='/'>Home</Link> : <img className={classes.Img} src={Avatar} alt='avatar' onClick={props.tooltipClick}/>}
                                    <div className={classes.TooltipSmall}>
                                        {showTooltip}
                                    </div>
                                </div>
                    {(localStorage.getItem('auth') === 'authenticated' && path === '/') && <Link className={classes.DrawerLink} to="/my-meals">My Meals</Link>}            
                    <Link onClick={props.about} className={path !== '/' ? classes.DrawerLinkOne : classes.DrawerLink}to='/'>About Us</Link>
                    <Link onClick={props.contact} className={classes.DrawerLink}to='/'>Contact</Link>
                </ul>
            </div>
        )
    }




export default SideDrawer;