import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RandomCategory from './RandomCategory/RandomCategory';
import CategoryMeals from './CategoryMeals/CategoryMeals';
import * as actions from '../../store/actions/index';


class CategoryPage extends React.Component {

    // componentDidMount() {
    //     this.props.onFetchCategory(this.props.match.params)
    // }


    render () {

        // console.log(window.location)
        return (
            <div>
                <Header />
                    <RandomCategory />
                    <CategoryMeals />
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategory: (food) => dispatch(actions.fetchSimilar(food))        
    }
}

export default connect(null, mapDispatchToProps)(CategoryPage)