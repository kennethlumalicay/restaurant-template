import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/routes.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js';
import Contacts from './Contacts.js';

class Routes extends Component {
  render() {
    return (
      <main className='route'>
        <Route path='/:page?' component={ToTop}/>
        <Route path='/:page?' component={Nav}/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
        <Route path='/contacts' component={Contacts}/>
      </main>
    );
  }
}

class ToTop extends Component {
  componentWillReceiveProps(next) {
    if(this.props.match.params.page !== next.match.params.page) {
      let animate = setInterval(function() {
        if(window.scrollY <= 0) {
          clearInterval(animate);
          return;
        }
        window.scroll(0,window.scrollY-window.scrollY/64);
      });
    }
  }
  render() {
    return null;
  }
}

export default Routes;