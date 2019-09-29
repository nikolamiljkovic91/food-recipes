import React from 'react';
import { Link } from 'react-router-dom'
import classes from './MealsList.module.css'

const MealsList = (props) => {

    let array = props.list || [];

    let render = array.map(item => {
        return (
        <div className={classes.Results} key={item.idMeal}>
            <div className={classes.ItemImg}>
                <Link className={classes.Link} to='/'><img className={classes.Img} src={item.strMealThumb} alt='img'/></Link>
            </div>
            <div className={classes.TextDiv}>
                <p className={classes.TextOne}>{item.strMeal}</p>
                <p className={classes.Text}>Category: <span className={classes.Span}>{item.strCategory}</span></p>
                <p className={classes.Text}>Country: <span className={classes.Span}>{item.strArea}</span></p>
            </div>
        </div>
        )
    })

    if(props.list.loading){
        return <p>Loading...</p>
    }else{
        return (
            <div>
                <h1 className={classes.H}>My Meals</h1>
                <div className={classes.Wrap}>
                    {render}
                </div>
            </div>
        )
    }

}

export default MealsList;