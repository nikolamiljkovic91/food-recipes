import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <HomePage />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
