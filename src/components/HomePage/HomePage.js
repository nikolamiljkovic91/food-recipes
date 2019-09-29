import React from 'react';
import { connect } from 'react-redux'
import Header from '../Header/Header'
import AboutUs from './AboutUs/AboutUs';
import PageHeader from './PageHeader/PageHeader';
import List from './Categories/List';
import Contact from './Contact/Contact';
import * as actions from '../../store/actions/index';
import Footer from '../Footer/Footer';



class HomePage extends React.Component{
    state = {
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        categoryOpen: false
    }


    onInputChange = (event) => {
        const { formData } = this.state;
        this.setState({
            formData: {
                ...formData,
                [event.target.name]: event.target.value
            }
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const data = this.state.formData;
        localStorage.setItem('formData', JSON.stringify(data));
        this.setState({
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            }
        })
    }

    onClickHandler = () => {
        this.setState(prevState => ({
            categoryOpen: !prevState.categoryOpen
        }))
        if(!this.state.categoryOpen){
            this.props.onFetchCategories()
        }
        
    }


    
    render() {
    
        return (
            <div>
                <Header />
                <PageHeader 
                toggle={this.onClickHandler}/>
                <List 
                openCategory={this.state.categoryOpen}
                categoryState={this.props.category}/>
                <AboutUs />
                <Contact 
                input={this.onInputChange}
                formState={this.state.formData}
                submit={this.onSubmitHandler}/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.recipes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch(actions.fetchCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);