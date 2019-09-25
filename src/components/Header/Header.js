import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class Header extends React.Component {

    state = {
        user: {
            email: '',
            password: ''
        },
        sideDrawerOpen: false,
        tooltipOpen: false,
        isAuth: false,
        error: false
    }

    hamburgerButtonHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    tooltipOpenHandler = () => {
        this.setState(preState => ({
            tooltipOpen: !preState.tooltipOpen
        }))
    }

    onInputHandler = (event) => {
        const { user } = this.state;
        const email = event.target.name;
        const password = event.target.value
        this.setState({
            user: {
                ...user,
                [email]:password
            }
        })
        console.log(this.state)
    }

    onAuthHandler = (event) => {
        event.preventDefault();
        const existingUser = { email: 'test@test.com', password: 'test123'}
        const newUser = this.state.user;
        const existingUserKeys = Object.keys(existingUser);

        for (let key of existingUserKeys) {
            if(existingUser[key] !== newUser[key]){
                return this.setState({isAuth: false, error: true})
            }
        }       
        return this.setState({isAuth: true, tooltipOpen: false})
    }

    logoutHandler = () => {
        this.setState({isAuth: false, tooltipOpen: false, error: false, user:{email: '', password: ''}})
    }




    render() {

        return (
            <div style={{height: '100%'}}>
                <Toolbar
                drawerClickHandler={this.hamburgerButtonHandler}
                tooltip={this.state.tooltipOpen}
                authUser={this.state}
                tooltipClick={this.tooltipOpenHandler}
                onInputChange={this.onInputHandler}
                authForm={this.onAuthHandler}
                logoutButton={this.logoutHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}
                tooltip={this.state.tooltipOpen}
                tooltipClick={this.tooltipOpenHandler}
                onInputChange={this.onInputHandler}
                authForm={this.onAuthHandler}
                logoutButton={this.logoutHandler}
                authUser={this.state}/>
                {this.state.sideDrawerOpen && <Backdrop backdropHandler={this.backdropClickHandler}/>}
                <div style={{marginTop: '70px'}}>
                    
                </div>
            </div>
        )
    }
}

export default Header;