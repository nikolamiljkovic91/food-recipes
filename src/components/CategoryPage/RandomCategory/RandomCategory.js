import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './RandomCategory.module.css'
 
const RandomCategory = (props) => {
    console.log(props.check.loading)
    let array = props.random || [];


    let newArr =[];
    let newPos;
    let temp;

    for(let i = array.length -1; i > 0; i--){
        newPos = Math.floor(Math.random() * (i-1));
        temp = array[i];
        array[i] = array[newPos];
        array[newPos] = temp;
        newArr.push(temp)
    }

    let render = newArr.map(item => {
        return (
                <div className={classes.Div} key={item.idMeal}>
                    <h1 className={classes.MainHead}>{props.head}</h1>
                <div className={classes.ItemImg}>
                    <Link className={classes.Link} to={`/single-meal/${item.idMeal}`}><img className={classes.Img} src={item.strMealThumb} alt='img'/></Link>
                </div>
                    <p className={classes.TextOne}>{item.strMeal}</p>
                </div>
        )
    })

    if(props.check.loading){
        return <p style={{textAlign: 'center'}}>Loading...</p>
    }else{
        return(
        <div>
            {render.slice(0,1)}
            <div className={classes.Search}>
                <input className={classes.SearchInput} onChange={props.changeInput} type='text' value={props.filterR} placeholder='Search meals' />
            </div>
        </div>
        )
    }
}

export default withRouter(RandomCategory);