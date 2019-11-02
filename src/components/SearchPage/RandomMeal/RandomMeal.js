import React from 'react';
import { Link } from 'react-router-dom';
import classes from './RandomMeal.module.css';

const RandomMeal = (props) => {
    let meal = props.random.randomMeal

    let renderMeal = meal.map(item => {
        return (
        <div className={classes.RandomMeal} key={item.idMeal}>
            <div className={classes.Content}>
                <h1 className={classes.Headline}>Search results</h1>
                <p className={classes.Text}>Our recommendation</p>
                <div className={classes.ItemImg}>
                    <Link to={`single-meal/${item.idMeal}`}><img onClick={props.click} className={classes.Img} src={item.strMealThumb} alt='img'/></Link>
                </div>
                <p className={classes.TextOne}>{item.strMeal}</p>
                <p className={classes.Text}>Category: <span className={classes.Span}>{item.strCategory}</span></p>
                <p className={classes.Text}>Country: <span className={classes.Span}>{item.strArea}</span></p>
            </div>
        </div>
        )
    })

    if(props.random.loading){
        return <p className={classes.Loading}>Loading...</p>
    }else if(props.random.error){
        return <p className={classes.Error}>Error!!!</p>
    }else{
        return renderMeal
    }

}

export default RandomMeal;