import React from 'react';
import classes from './MealInformation.module.css';

const MealInfo = (props) => {

    let single = props.info.meal.map(item => {
        return (
        <div className={classes.SingleItem} key={item.idMeal}>
            <div className={classes.MealContent}>
                <div className={classes.HeadImg}>
                    <h3 className={classes.TextHed}>{item.strMeal}</h3>
                    <div className={classes.ItemImg}><img className={classes.Img} src={item.strMealThumb} alt='productImg' /></div> 
                </div>
                <div className={classes.Info}>
                    <div className={classes.Ingredients}>
                        <h5 className={classes.HeadTwo}>Ingredients</h5>
                        <ul className={classes.UlList}>
                            <li className={classes.Li}><p>{item.strIngredient}</p></li>
                        </ul>
                    </div>
                    <div className={classes.Measure}>
                        <h5 className={classes.HeadTwo}>Measure</h5>
                        <ul className={classes.UlList}>
                            <li className={classes.Li}><p>{item.strMeasure}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.ContentTwo}>
                <div className={classes.Hash}>
                    <p className={classes.ParH}><span className={classes.SpanH}>#</span>{item.strTags}</p>
                    <p className={classes.ParH}><span className={classes.SpanH}>#</span>{item.strTags}</p>
                </div>
                <div className={classes.Description}>
                    <p className={classes.Par}><span className={classes.Span}>Category:</span> {item.strCategory}</p>
                    <p className={classes.Par}><span className={classes.Span}>Country:</span> {item.strArea}</p>
                    <p className={classes.Par}><span className={classes.Span}>Video:</span> {item.strYoutube}</p>
                    <p className={classes.Par}>{item.strInstructions}</p>
                </div>
            </div>
        </div>
        )
    })

    return single;
}

export default MealInfo;