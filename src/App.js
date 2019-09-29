import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 
import HomePage from './components/HomePage/HomePage';
import SearchPage from './components/SearchPage/SearchPage';
import MyMeals from './components/MyMeals/MyMeals';
import CategoryPage from './components/CategoryPage/CategoryPage';
import SingleMealPage from './components/SingleMealPage/SingleMealPage';

class App extends React.Component {
  
  render() {
    
    let routes = (
      <Switch>
        <Route path='/'exact component={HomePage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/category' component={CategoryPage} />
        <Route path='/single-meal/:id' component={SingleMealPage} />
        <Redirect to='/' />
      </Switch>
    );
  
    if(this.props.authenticated.authRoute){
      routes = (
        <Switch>
        <Route path='/'exact component={HomePage} />
        <Route path='/search/' component={SearchPage} />
        <Route path='/my-meals' component={MyMeals} />
        <Route path='/single-meal/:id' component={SingleMealPage} />
        <Route path='/category/:cat' component={CategoryPage} />
        <Redirect to='/' />
      </Switch>
      )

    } 
    
    return (
      <div>
        {routes}
      </div>
    )
  }
  }

const mapStateToProps = (state) => {
  return {
    authenticated: state.authRoute
  }
}

export default connect(mapStateToProps)(App);
