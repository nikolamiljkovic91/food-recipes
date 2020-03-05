import React from 'react';
import { connect } from 'react-redux';
import classes from './MealsList.module.css'

const MealsList = (props) => {

    let array = props.data.meals || [];

    let render = array.map(item => {
        return (
        <div className={classes.Results} key={item.idMeal}>
            <div className={classes.ItemImg}>
                <img className={classes.Img} src={item.strMealThumb} alt='img'/>
            </div>
            <div className={classes.TextDiv}>
                <p className={classes.TextOne}>{item.strMeal}</p>
                <p className={classes.Text}>Category: <span className={classes.Span}>{item.strCategory}</span></p>
                <p className={classes.Text}>Country: <span className={classes.Span}>{item.strArea}</span></p>
            </div>
        </div>
        )
    })
    if(props.data.loading){
        return <p style={{textAlign: 'center'}}>Loading...</p>
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

const mapStateToProps = state => {
    return {
        data: state.meals
    }
}

export default connect(mapStateToProps)(MealsList);