import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/icons/avatar.png'

import classes from './Toolbar.module.css'
import HamburgerButton from '../SideDrawer/HamburgerButton';
import Tooltip from '../Tooltip/Tooltip';

class Toolbar extends React.Component {

    state = {
        tooltipOpen: false
    }

        tooltipOpenHandler = () => {
        this.setState(preState => ({
            tooltipOpen: !preState.tooltipOpen
        }))
        console.log(this.state.tooltipOpen)
    }

    render () {

        let showTooltip = null;
        if(this.state.tooltipOpen){
            showTooltip = <Tooltip />
        }
    
        return (
            <div className={classes.Nav}>
                <div>
                    <HamburgerButton clicked={this.props.drawerClickHandler}/>
                </div>
                <input className={classes.Input} type='text'/>
                {/* <div className={classes.Divide}></div> */}
                <ul className={classes.Ul}>
                    <li className={classes.Li}>
                            <div className={classes.ImgContainer}>
                                <img className={classes.Img} src={Avatar} alt='avatar' onClick={this.tooltipOpenHandler}/>
                                <div className={classes.TooltipCont}>
                                    {showTooltip}
                                </div>
                            </div>
                        <Link className={classes.Link} to="/">About Us</Link>
                        <Link className={classes.Link} to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Toolbar;