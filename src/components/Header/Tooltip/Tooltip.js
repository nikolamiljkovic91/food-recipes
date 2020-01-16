import React from 'react';
import classes from './Tooltip.module.css';
import { connect } from 'react-redux'
 

const Tooltip = (props) => {
    console.log(props.authData.loading)
    
    let errorMessage = (
        <p className={classes.Error}>Invalid Input!</p>
    )
    
    let tooltip = (
        <div className={classes.Tooltip}>
            {!props.authData.loading ? <button onClick={props.logoutClick} className={classes.LogoutButton}>LOGOUT</button> : <p>Loading...</p>}
        </div> 
    )

    if(props.auth.uid){
        return tooltip
    }else{
        tooltip = (
            <form onSubmit={props.formSubmit}>
            <div className={classes.Tooltip}>
                <input className={classes.Input} type='email' name='email' placeholder='Email' onChange={props.input} value={props.userAuth.user.email}/>
                <input className={classes.Input} type='password' name='password' placeholder='Password' onChange={props.input} value={props.userAuth.user.password}/>
                <button type='submit' className={classes.Button} onClick={props.formSubmit}>Login</button>
                {props.authData.error && errorMessage}
            </div>
        </form>
        )
    }
    
    return tooltip
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        authData: state.auth
    }
}


export default connect(mapStateToProps)(Tooltip);