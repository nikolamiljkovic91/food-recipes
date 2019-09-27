import React from 'react';
import { connect } from 'react-redux'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer'; 
import RandomMeal from './RandomMeal/RandomMeal';
import Category from './Category/Category';
import SearchResults from './SearchResults/SearchResults';
import * as actions from '../../store/actions/index';

class SearchPage extends React.Component {

    state={
        dropdownInput: ''
    }

    componentDidMount = () => {
        this.props.onFetchCategories()
        this.props.onFetchRandom()
    }

    filterHandler = (event) => {
        return this.setState({ dropdownInput: event.target.value })
    }
    
    
    
    render() {
        
        return (
            <div>
                <Header />
                <RandomMeal random={this.props.fetchRandom}/>
                <Category state={this.props.category} click={this.filterHandler}/>
                <SearchResults input={this.state.dropdownInput} searchResults={this.props.data} data={this.props.category.categories}/>
                <Footer />
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return{
        data: state.meals,
        category: state.recipes,
        fetchRandom: state.random
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch(actions.fetchCategories()),
        onFetchRandom: () => dispatch(actions.fetchRandom())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);