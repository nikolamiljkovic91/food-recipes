import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import SearchPage from './components/SearchPage/SearchPage';
import MyMeals from './components/MyMeals/MyMeals';
import CategoryPage from './components/CategoryPage/CategoryPage';
import SingleMealPage from './components/SingleMealPage/SingleMealPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/'exact component={HomePage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/my-meals' component={MyMeals} />
        <Route path='/category' component={CategoryPage} />
        <Route path='/single-meal/:id' component={SingleMealPage} />
      </Switch>
    </div>
  )
}

export default App;
