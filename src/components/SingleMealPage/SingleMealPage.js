import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MealInfo from './MealInformation/MealInformation';
import Similar from './SimilarMeals/SimilarMeals';
import * as actions from '../../store/actions/index';

class SingleMeal extends React.Component {
    
    componentDidMount () {
        this.props.onFetchMeal(this.props.match.params.id)
        console.log(this.props.match.params)
    }

    componentDidUpdate() {
        let cat = this.props.singleMeal.meal.map(item => {
            return item.strCategory
        })
        this.props.onFetchSimilar(cat)
    }
    
    render () {
        return (
            <div>
                <Header />
                    <MealInfo info={this.props.singleMeal} />
                    <Similar />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        singleMeal: state.meal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMeal: (id) => dispatch(actions.fetchMealById(id)),
        onFetchSimilar: (category) => dispatch(actions.fetchSimilar(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal);