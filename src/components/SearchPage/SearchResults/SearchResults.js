import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SearchResults.module.css';

const SearchResults = (props) => {


    let array = props.searchResults.meals || [];

    let filterArr = array.filter(meal => {
        return meal.strCategory.toLowerCase().indexOf(props.input.toLowerCase()) !== -1
    })
    
    
    const results = filterArr || [];
    
    let searchList = results.map(item => {
    return (
            <div className={classes.Results} key={item.idMeal}>
                <div className={classes.ItemImg}>
                    <Link className={classes.Link} to={`/single-meal/${item.idMeal}`}><img onClick={props.click} className={classes.Img} src={item.strMealThumb} alt='img'/></Link>
                </div>
                <div className={classes.TextDiv}>
                    <p className={classes.TextOne}>{item.strMeal}</p>
                    <p className={classes.Text}>Category: <span className={classes.Span}>{item.strCategory}</span></p>
                    <p className={classes.Text}>Country: <span className={classes.Span}>{item.strArea}</span></p>
                </div>
            </div>
        )
    })

    if(props.searchResults.loading){
        return <p className={classes.Loading}>Loading...</p>
    }else if(props.searchResults.error){
        return <p className={classes.Loading}>Error!!!</p>
    }else{
        return (
            <div className={classes.ListWrapper}>
                {searchList}
            </div>
        )
    }
}

export default SearchResults