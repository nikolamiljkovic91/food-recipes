import React from 'react';
import classes from './PageHeader.module.css'
import HeaderImage from '../../../assets/Images/HEADER-IMAGE.png'

const PageHeader = (props) => {

    return (
        <div className={classes.HeaderPage}>
        <div className={classes.HeaderText}>
            <h1>Food Recipes</h1>
            <p className={classes.Text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <div><button onClick={props.toggle} className={classes.Btn} >Categories</button></div>
        </div>
        <div className={classes.HeaderImage}>
            <img className={classes.ImgHead} src={HeaderImage} alt='foodImage'/>
        </div>
        </div>
    )
}

export default PageHeader;