import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Routes from './Routes.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/company-template/'>
        <div className='App'>
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;