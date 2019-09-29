import React from 'react';
import ListItem from './ListItem';
import classes from './List.module.css'


const List = (props) => {

    let listRender = null

    if(!props.openCategory){
        return listRender
    }else{
        listRender = (
        <div className={classes.List}>
            <div className={classes.ListItem}>
                <ListItem data={props.categoryState} />
            </div>
        </div>
        )
    }

    return listRender
}

export default List;