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
        console.log(this.props.match)
        }
        
        filterHandler = (event) => {
        return this.setState({ dropdownInput: event.target.value })
    }
                        
            
        render() {
                console.log(this.props.fetchRandom.randomMeal)
    
        return (
            <div>
                <Header />
                <RandomMeal click={this.onClickHandler} random={this.props.fetchRandom}/>
                <Category state={this.props.category} click={this.filterHandler}/>
                <SearchResults click={this.onClickHandler} input={this.state.dropdownInput} searchResults={this.props.data} data={this.props.category.categories}/>
                <Footer />
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return{
        data: state.meals,
        category: state.recipes,
        fetchRandom: state.random,
        singleMeal: state.meal        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch(actions.fetchCategories()),
        onFetchRandom: () => dispatch(actions.fetchRandom()),
        // onFetchSimilar: (category) => dispatch(actions.fetchSimilar(category))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);