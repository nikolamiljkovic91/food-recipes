import React from 'react';
import { Link } from 'react-router-dom';
import classes from './RandomCategory.module.css'
import BEEF from '../../../assets/Images/BEEF.png'
 
const RandomCategory = () => {

    return (
        <div className={classes.SearchSection}>
    <div className={classes.RandomMeal}>
        <div className={classes.Content}>
            <h1 className={classes.Headline}>Category</h1>
            <p className={classes.Text}>Our recommendation</p>
            <div className={classes.ItemImg}>
                <Link to='/'><img className={classes.Img} src={BEEF} alt='img'/></Link>
            </div>
            <p className={classes.TextOne}>NASLOV</p>
        </div>
    </div>
    <div className={classes.Search}>
        <input className={classes.SearchInput} type='text' name='search' placeholder='Search meals' />
    </div>
        </div>
    )
}

export default RandomCategory;