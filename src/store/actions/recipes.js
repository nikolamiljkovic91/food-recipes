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

export const fetchMealStart = () => {
    return{
        type: actionTypes.FETCH_MEAL_START
    }
}

export const fetchMealSuccess = (meal) => {
    return{
        type: actionTypes.FETCH_MEAL_SUCCESS,
        meal: meal
    }
}

export const fetchMealFail = (error) => {
    return {
        type: actionTypes.FETCH_MEAL_FAIL,
        error: error
    }
}

export const fetchMealById = (id) => {
    return dispatch => {
        dispatch(fetchMealStart())
        axios.get(`${URL}lookup.php?i=${id}`)
        .then(response => {
            dispatch(fetchMealSuccess(response.data.meals))
        })
        .catch(error => {
            dispatch(fetchMealFail(error))
        })
    }
}

export const fetchSimilarStart = () => {
    return{
        type: actionTypes.FETCH_SIMILAR_START
    }
}

export const fetchSimilarSuccess = (similar) => {
    return{
        type: actionTypes.FETCH_SIMILAR_SUCCESS,
        similar: similar
    }
}

export const fetchSimilarFail = (error) => {
    return {
        type: actionTypes.FETCH_SIMILAR_FAIL,
        error: error
    }
}

export const fetchSimilar = (category) => {
    return dispatch => {
        dispatch(fetchSimilarStart())
        axios.get(`${URL}filter.php?c=${category}`)
        .then(response => {
            let arr = response.data.meals;
            let newPos;
            let temp;

            for(let i = arr.length -1; i > 0; i--){
                newPos = Math.floor(Math.random() * (i-1));
                temp = arr[i];
                arr[i] = arr[newPos];
                arr[newPos] = temp;
            }
            dispatch(fetchSimilarSuccess(arr))
        })
        .catch(error => {
            dispatch(fetchSimilarFail(error))
        })
    }
}       



