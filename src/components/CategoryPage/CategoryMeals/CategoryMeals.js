import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CategoryMeals.module.css'
import BEEF from '../../../assets/Images/BEEF.png'
 
const CategoryMeals = () => {

    return (
        <div className={classes.Wrap}>
        <div className={classes.Results}>
            <div className={classes.ItemImg}>
                <Link className={classes.Link} to='/'><img className={classes.Img} src={BEEF} alt='img'/></Link>
            </div>
            <div className={classes.TextDiv}>
                <p className={classes.TextOne}>text</p>
                <p className={classes.Text}>Category: <span className={classes.Span}>text</span></p>
                <p className={classes.Text}>Country: <span className={classes.Span}>text</span></p>
            </div>
        </div>
        </div>
    )
}

export default CategoryMeals;