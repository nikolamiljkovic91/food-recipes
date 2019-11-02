import React from 'react';
import classes from './MealInformation.module.css';

const MealInfo = (props) => {

    let array = props.info.meal[0] || [];

    let ingredients = [];

    for(let key in array){
        if(key.includes('strIngredient')){
            ingredients.push(array[key]) 
        }
    };

    let measure = [];

    for(let index in array){
        if(index.includes('strMeasure')){
            measure.push(array[index])
        }
    }

    let ingList = ingredients.map(ing => {
        return  <p key={Math.random() * 500}>{ing}</p>
    })

    let measureList = measure.map(mes => {
        return <p key={Math.random() * 500}>{mes}</p>
    })


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
                        {ingList}
                    </div>
                    <div className={classes.Measure}>
                        <h5 className={classes.HeadTwo}>Measure</h5>
                        {measureList}
                    </div>
                </div>
            </div>
            <div className={classes.ContentTwo}>
                <div className={classes.Hash}>
        <p className={classes.ParH}>{item.strTags && <span className={classes.SpanH}>#</span>}{item.strTags && item.strTags.split(',').join(' #')}</p>
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

    if(props.info.loading){
        return <p style={{textAlign: 'center'}}>Loading...</p>
    }else if(props.info.error){
        return <p style={{textAlign: 'center'}}>Error!</p>
    }else{
        return single;
    }

}

export default MealInfo;