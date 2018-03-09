import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/app.css';
import Routes from './routes/Routes.js';
import Footer from './components/footer/Footer.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/restaurant-template/'>
        <div className='app'>
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;