import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class Header extends React.Component {

    state = {
        sideDrawerOpen: false
    }

    hamburgerButtonHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }


    render() {

        return (
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.hamburgerButtonHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
                {this.state.sideDrawerOpen && <Backdrop backdropHandler={this.backdropClickHandler}/>}
                <div style={{marginTop: '70px'}}>
                    
                </div>
            </div>
        )
    }
}

export default Header;