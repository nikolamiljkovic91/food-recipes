import React from 'react';
import classes from './Contact.module.css';


const Contact = (props) => {

    return (
        <form onSubmit={props.submit}>
            <div className={classes.ContactForm}>
            <h2 className={classes.ContactHeadline}>Contact</h2>
            <div className={classes.ContactInput}>
                <input className={classes.SingleInput} type='text' name='firstName' placeholder='First name' onChange={props.input} value={props.formState.firstName} />
                <input className={classes.SingleInput} type='text' name='lastName' placeholder='Last name' onChange={props.input} value={props.formState.lastName}/>
                <input className={classes.SingleInput} type='email' name='email' placeholder='Email' onChange={props.input} value={props.formState.email}/>
                <textarea className={classes.Textarea} name='message' placeholder='Message' onChange={props.input} value={props.formState.message}/>
            </div>
            <div>
                <button className={classes.ContactBtn} type='submit'>Send</button>
            </div>
            </div>
        </form>
    )
}

export default Contact