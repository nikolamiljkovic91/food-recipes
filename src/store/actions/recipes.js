import * as actionTypes from './actionTypes'
import axios from 'axios';

export const fetchCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_START
    };
};

export const fetchCategoriesFail = (error) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: error
    }
}

export const fetchCategoriesSuccess = (category) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        category: category
    }
}

export const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchCategoriesStart());
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => {
            let data = response.data.categories;
            dispatch(fetchCategoriesSuccess(data))
            console.log(data)
        })
        .catch(error => {
            dispatch(fetchCategoriesFail(error))
        })
    }
}