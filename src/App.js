import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Nav from './Nav.js';
import Routes from './Routes.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
            <Nav />
            <Routes />
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;