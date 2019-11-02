import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import searchReducer from './searchReducer';
import randomReducer from './randomReducer'
import mealReducer from './mealReducer';
import categoryReducer from './categoryReducer';


export default combineReducers({
    recipes: recipesReducer,
    meals: searchReducer,
    random: randomReducer,
    meal: mealReducer,
    similar: categoryReducer
})