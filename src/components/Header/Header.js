import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import * as actions from '../../store/actions/index';

class Header extends React.Component {

    state = {
        user: {
            email: '',
            password: ''
        },
        signUp: {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        },
        searchText: '',
        sideDrawerOpen: false,
        tooltipOpen: false,
        error: false,

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
            tooltipOpen: !preState.tooltipOpen,
            user:{email: '', password: ''},
            signUp: {email: '', password: '', firstName: '', lastName: ''},
            error: false
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
    }

    singUpInputHandler = (event) => {
        const { signUp } = this.state
        const name = event.target.name
        const value = event.target.value
        this.setState({
            signUp: {
                ...signUp,
                [name] : value
            }
        })
    }

    //FIREBASE AUTHENTICATION

        onAuthHandler = (event) => {
        event.preventDefault();
        this.props.onSignIn(this.state.user)
        this.setState({ error: true })
        // localStorage.setItem('auth', 'authenticated')
        
    }

        onSignUpHandler = (event) => {
            event.preventDefault()
            this.props.onSignUp(this.state.signUp)
            this.setState({ error: true })
        }
    


    // onuthHandler = (event) => {
    //     event.preventDefault();
    //     const existingUser = { email: 'test@test.com', password: 'test123'}
    //     const newUser = this.state.user;
    //     const existingUserKeys = Object.keys(existingUser);

    //     for (let key of existingUserKeys) {
    //         if(existingUser[key] !== newUser[key]){
    //             return this.setState({isAuth: false, error: true})
    //         }
    //     }       
    //     localStorage.setItem('auth', 'loggedIn')
    //     return this.setState({isAuth: true, tooltipOpen: false});
    // }
    
    logoutHandler = () => {
        this.props.onSignOut()
        this.setState({ isAuth: false, tooltipOpen: false, error: false, user:{email: '', password: ''} })
        localStorage.clear('auth')
    }
    
    onSearchHandler = (event) => {  
        this.setState({searchText: event.target.value})
    }
    
    onEnterHandler = (event) => {
        if(event.key === 'Enter' && event.target.value !== ''){
            this.props.onFetchMeals(this.state.searchText)
            this.props.history.push('/search')
        }
    } 
    
    
    
    
    render() {
        
        
        
        return (
            <div>
                <Toolbar
                enterHandler={this.onEnterHandler}
                onSearchHandler={this.onSearchHandler}
                drawerClickHandler={this.hamburgerButtonHandler}
                tooltip={this.state.tooltipOpen}
                authUser={this.state}
                tooltipClick={this.tooltipOpenHandler}
                onInputChange={this.onInputHandler}
                authForm={this.onAuthHandler}
                logoutButton={this.logoutHandler}
                about={this.props.scrollAbout}
                contact={this.props.scrollContact}
                signUp={this.singUpInputHandler}
                onSignUp={this.onSignUpHandler}
                />
                <SideDrawer show={this.state.sideDrawerOpen}
                tooltip={this.state.tooltipOpen}
                tooltipClick={this.tooltipOpenHandler}
                onInputChange={this.onInputHandler}
                authForm={this.onAuthHandler}
                logoutButton={this.logoutHandler}
                authUser={this.state}
                about={this.props.scrollAbout}
                contact={this.props.scrollContact}
                signUp={this.singUpInputHandler}
                onSignUp={this.onSignUpHandler}
                />
                {this.state.sideDrawerOpen && <Backdrop backdropHandler={this.backdropClickHandler}/>}
                <div style={{marginTop: '100px'}}>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.meals,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMeals: (text) => dispatch(actions.fetchMeals(text)),
        onSignIn: (credentials) => dispatch(actions.signIn(credentials)),
        onSignOut: () => dispatch(actions.signOut()),
        onSignUp: (newUser) => dispatch(actions.signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));