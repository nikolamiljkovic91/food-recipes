import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideDrawer.module.css'
import Avatar from '../../../assets/icons/avatar.png'
import TooltipSmall from '../Tooltip/TooltipSmall';

const SideDrawer = (props) => {


        let showTooltip = null;
        if(props.tooltip){
            showTooltip = <TooltipSmall input={props.onInputChange} userAuth={props.authUser} formSubmit={props.authForm} logoutClick={props.logoutButton}/>
        }

        return (
            <div className={props.show ? classes.SideDrawerOpen : classes.SideDrawer}>
                <ul className={classes.DrawerList}>
                <div className={classes.ImgContainer}>
                                    <img className={classes.Img} src={Avatar} alt='avatar' onClick={props.tooltipClick}/>
                                    <div className={classes.TooltipSmall}>
                                        {showTooltip}
                                    </div>
                                </div>
                    {props.authUser.isAuth && <Link className={classes.DrawerLink} to="/">My Meals</Link>}            
                    <Link className={classes.DrawerLink}to='/'>About Us</Link>
                    <Link className={classes.DrawerLink}to='/'>Contact</Link>
                </ul>
            </div>
        )
    }


export default SideDrawer;