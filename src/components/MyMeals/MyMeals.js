import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MealsList from './MealsList/MealsList';
import * as actions from '../../store/actions/index';

class MyMeals extends React.Component {

    componentDidMount() {
        let meal = 'beef'
        this.props.onFetchMeals(meal)
    }


    render() {
        return(
            <div>
                <Header />
                <MealsList />
                <Footer />
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         data: state.meals.meals
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        onFetchMeals: (name) => dispatch(actions.fetchMeals(name))
    }
}
 
export default connect(null, mapDispatchToProps)(MyMeals);
