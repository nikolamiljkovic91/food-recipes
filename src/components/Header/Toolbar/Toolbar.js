import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/icons/avatar.png'
import { connect } from 'react-redux';

import classes from './Toolbar.module.css'
import HamburgerButton from '../SideDrawer/HamburgerButton';
import Tooltip from '../Tooltip/Tooltip';

const Toolbar = (props) => {


        let path = window.location.pathname;

        let showTooltip = null;
        if(props.tooltip){
            showTooltip = <Tooltip input={props.onInputChange} userAuth={props.authUser} formSubmit={props.authForm} logoutClick={props.logoutButton}/>
        }
    
        return (
            <div className={classes.Nav}>
                <div>
                    <HamburgerButton clicked={props.drawerClickHandler}/>
                </div>
                <input onChange={props.onSearchHandler}
                 className={classes.Input}
                 type='text' placeholder='Search recipes...'
                 onKeyPress={props.enterHandler}/>
                {/* <div className={classes.Divide}></div> */}
                <ul className={classes.Ul}>
                    <li className={classes.Li}>
                            <div className={classes.ImgContainer}>    
                                {path !== '/' ? <Link className={classes.Link} to='/'>Home</Link> : <img className={classes.Img} src={Avatar} alt='avatar' onClick={props.tooltipClick}/>}
                                <div className={classes.TooltipCont}>
                                    {showTooltip}
                                </div>
                            </div>
                        {(localStorage.getItem('auth') === 'authenticated' && path === '/') && <Link className={classes.Link} to="/my-meals">My Meals</Link>}
                        <Link onClick={props.about} className={classes.Link} to="/">About Us</Link>
                        <Link onClick={props.contact} className={classes.Link} to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Toolbar);