import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  )
}

export default App;
