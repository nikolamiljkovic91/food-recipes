import React from 'react';
import classes from './Category.module.css'

const Category = (props) => {
    console.log(props.click.filterArr)

    let drop = props.state.categories.map(item => {
        return <option className={classes.Option} value={item.strCategory} key={item.idCategory}>{item.strCategory}</option>
    })

    return (
        <div className={classes.Category}>
            <div className={classes.Dropdown}>
                <select onChange={props.click} className={classes.Select}>
                    <option value="">Categories</option>
                    {drop}
                </select>
            </div>
        </div>
    )
}

export default Category