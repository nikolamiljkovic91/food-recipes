import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import Logo from '../../assets/Images/LOGO.png'
import Facebook from '../../assets/icons/FB.png'
import Instagram from '../../assets/icons/INSTA.png'



const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.LogoWrapper}>
                <img className={classes.Logo} src={Logo} alt='logo'/>
            </div>
            <div className={classes.Copyright}>
                <p className={classes.Text}>Copyright - Nikola Miljkovic</p>
            </div>
            <div className={classes.SocialNetworks}>
                <Link className={classes.Links} to="/facebook" target="_blank">
                <img className={classes.Social} src={Facebook} alt='fb' />
                </Link>
                <Link className={classes.Links} to="/instagram" target="_blank">
                <img className={classes.Social} src={Instagram} alt='insta' />
                </Link>
            </div>
        </div>
    )
}

export default Footer