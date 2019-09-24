import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideDrawer.module.css'
import Avatar from '../../../assets/icons/avatar.png'
import TooltipSmall from '../Tooltip/TooltipSmall';

class SideDrawer extends React.Component {

    state = {
        tooltipOpen: false   
    }

        tooltipOpenHandler = () => {
        this.setState(preState => ({
            tooltipOpen: !preState.tooltipOpen
        }))
        console.log(this.state.tooltipOpen)
    }


    render() {

        let showTooltip = null;
        if(this.state.tooltipOpen){
            showTooltip = <TooltipSmall />
        }

        return (
            <div className={this.props.show ? classes.SideDrawerOpen : classes.SideDrawer}>
                <ul className={classes.DrawerList}>
                <div className={classes.ImgContainer}>
                                    <img className={classes.Img} src={Avatar} alt='avatar' onClick={this.tooltipOpenHandler}/>
                                    <div className={classes.TooltipSmall}>
                                        {showTooltip}
                                    </div>
                                </div>
                    <Link className={classes.DrawerLink}to='/'>About Us</Link>
                    <Link className={classes.DrawerLink}to='/'>Contact</Link>
                </ul>
            </div>
        )
    }
}

export default SideDrawer;