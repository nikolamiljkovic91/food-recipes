import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ListItem.module.css';

const ListItem = (props) => {
    
    console.log(props.data)

    let list = props.data.categories.map((item) => {
        return(
        <div className={classes.SingleItem} key={item.idCategory}>
            <div className={classes.Item}>
                <Link to='/category'><img className={classes.ItemImg} src={item.strCategoryThumb} alt='meal'/></Link>
            </div>
            <div className={classes.Name}>
                <p className={classes.NameText}>{item.strCategory}</p>
            </div>
        </div>
        )
    })

    if(props.data.loading){
        return <p className={classes.Loading}>Loading...</p>
    }else if(props.data.error){
        return <p>Error!!!</p>
    }else{
        return list
    }
}

export default ListItem;