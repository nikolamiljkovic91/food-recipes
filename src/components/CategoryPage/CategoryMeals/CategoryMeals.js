import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CategoryMeals.module.css'
 
const CategoryMeals = (props) => {
    let array = props.list || [];

    let filterArr = array.filter(meal => {
        return meal.strMeal.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1
    })

    let render = filterArr.map(item => {
        return (
        <div className={classes.Div} key={item.idMeal}>
        <div className={classes.SimilarItem}>
            <div className={classes.ItemImg}>
                <Link className={classes.Link} to={`/single-meal/${item.idMeal}`}><img className={classes.Img} src={item.strMealThumb} alt='img'/></Link>
            </div>
                <p className={classes.TextOne}>{item.strMeal}</p>
        </div>
        </div>
        )
    })

    

    return (
        <div className={classes.Wrap}>
            {render}
        </div>
    )
}

export default CategoryMeals;