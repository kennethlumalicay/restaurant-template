import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/routes.css';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <main className='route'>
        <Route exact path='/' component={Home}/>
      </main>
    );
  }
}

export default App;