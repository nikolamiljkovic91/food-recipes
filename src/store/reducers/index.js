import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import searchReducer from './searchReducer';
import randomReducer from './randomReducer'

export default combineReducers({
    recipes: recipesReducer,
    meals: searchReducer,
    random: randomReducer
})