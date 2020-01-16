import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import searchReducer from './searchReducer';
import randomReducer from './randomReducer'
import mealReducer from './mealReducer';
import categoryReducer from './categoryReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


export default combineReducers({
    recipes: recipesReducer,
    meals: searchReducer,
    random: randomReducer,
    meal: mealReducer,
    similar: categoryReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})