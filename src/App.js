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
        <Route path='/my-meals' render={()=>(localStorage.getItem('auth') === 'authenticated') && <MyMeals/>} />
        <Route path='/category/:cat' component={CategoryPage} />
        <Route path='/single-meal/:id' component={SingleMealPage} />
        <Route path="/instagram" component={()=>{
                    window.location.href = "https://www.instagram.com";
                    return null
                }} />
        <Route path="/facebook" component={()=>{
                    window.location.href = "https://www.facebook.com";
                    return null
                }} />        
        <Redirect to='/' />
      </Switch>
    );
    
    return (
      <div>
        {routes}
      </div>
    )
  }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }


export default connect(mapStateToProps)(App);
