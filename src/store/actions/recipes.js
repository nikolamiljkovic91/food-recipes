import * as actionTypes from './actionTypes'
import axios from 'axios';

const URL = 'https://www.themealdb.com/api/json/v1/1/';

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
        axios.get(`${URL}categories.php`)
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


export const fetchMealsStart = () => {
    return {
        type: actionTypes.FETCH_MEALS_START
    };
};

export const fetchMealsFail = (error) => {
    return {
        type: actionTypes.FETCH_MEALS_FAIL,
        error: error
    }
}

export const fetchMealsSuccess = (meals) => {
    return {
        type: actionTypes.FETCH_MEALS_SUCCESS,
        meals: meals
    }
}

export const fetchMeals = (meal) => {
    return dispatch => {
        dispatch(fetchMealsStart());
        axios.get(`${URL}search.php?s=${meal}`)
        .then(response => {
            let mealData = response.data.meals
            dispatch(fetchMealsSuccess(mealData))
            console.log(mealData)
        })
        .catch(error => {
            dispatch(fetchMealsFail(error))
        })
    }
}

export const fetchRandomStart = () => {
    return {
        type: actionTypes.FETCH_RANDOM_START,
    }
}

export const fetchRandomSuccess = (randomMeal) => {
    return {
        type: actionTypes.FETCH_RANDOM_SUCCESS,
        randomMeal: randomMeal
    }
}

export const fetchRandomFail = (error) => {
    return {
        type: actionTypes.FETCH_RANDOM_FAIL,
        error: error
    }
}

export const fetchRandom = () => {
    return dispatch => {
        dispatch(fetchRandomStart())
        axios.get(`${URL}random.php`)
        .then(response => {
            let randomMeal = response.data.meals
            dispatch(fetchRandomSuccess(randomMeal))
        })
        .catch(error => {
            dispatch(fetchRandomFail(error))
        })
    }
}
