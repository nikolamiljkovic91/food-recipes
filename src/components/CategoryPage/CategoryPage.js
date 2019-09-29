import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RandomCategory from './RandomCategory/RandomCategory';
import CategoryMeals from './CategoryMeals/CategoryMeals';
import * as actions from '../../store/actions/index';


class CategoryPage extends React.Component {

    state = {
        searchInput: '',
        headline: ''
    }

    componentDidMount() {
        this.props.onFetchCategory(this.props.match.params.cat)
        this.setState({ headline: this.props.match.params.cat})
    }

    onInputHandler = (event) => {
        event.preventDefault()
        let value = event.target.value
        this.setState({searchInput: value})
    }   


    render () {
        return (
            <div>
                <Header />
                    <RandomCategory
                    head={this.state.headline}
                    filterR={this.state.searchInput}
                    changeInput={this.onInputHandler}
                    random={this.props.category}
                    check={this.props.loading}/>
                    <CategoryMeals
                    loading={this.props.loading}
                    filter={this.state.searchInput}
                    list={this.props.category}/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    
    return {
        category: state.similar.similar,
        loading: state.similar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategory: (food) => dispatch(actions.fetchSimilar(food))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)