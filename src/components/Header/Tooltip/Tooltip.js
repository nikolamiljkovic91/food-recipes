import React from 'react';
import classes from './Tooltip.module.css';


const Tooltip = (props) => {

    let errorMessage = (
        <p className={classes.Error}>Invalid Input!</p>
    )
    
    let tooltip = (
        <div className={classes.Tooltip}>
            <button onClick={props.logoutClick} className={classes.LogoutButton}>LOGOUT</button>
        </div> 
    )

    if(props.userAuth.isAuth){
        return tooltip
    }else{
        tooltip = (
            <form onSubmit={props.formSubmit}>
            <div className={classes.Tooltip}>
                <input className={classes.Input} type='email' name='email' placeholder='Email' onChange={props.input} value={props.userAuth.user.email}/>
                <input className={classes.Input} type='password' name='password' placeholder='Password' onChange={props.input} value={props.userAuth.user.password}/>
                <button type='submit' className={classes.Button} onClick={props.formSubmit}>Login</button>
                {props.userAuth.error && errorMessage}
            </div>
        </form>
        )
    }
    
    return tooltip
}

export default Tooltip;