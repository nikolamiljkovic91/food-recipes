import React from 'react';
import { connect } from 'react-redux';
import classes from './SimilarMeals.module.css';

const Similar = (props) => {

    let meals = props.similar.similar || [];
    

     let arr = meals.map(item => {
        return (
        <div className={classes.Div} key={item.idMeal}>
                <div className={classes.SimilarItem}>
                    <div className={classes.ItemImg}>
                        <img className={classes.Img} src={item.strMealThumb} alt='img'/>
                    </div>
                    <p className={classes.TextOne}>{item.strMeal}</p>
                </div>
        </div>
        )
    })

    if(props.similar.loading){
        return <p>Loading...</p>
    }else{
        return (
            <div className={classes.Wrap}>
                {arr.slice(0,3)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        similar: state.similar
    }
}

export default connect(mapStateToProps)(Similar);