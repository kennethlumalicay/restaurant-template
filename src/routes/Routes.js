import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './routes.css';
import Home from './home/Home.js';
import Menu from './menu/Menu.js';
import About from './about/About.js';
import Order from './order/Order.js';
import Contacts from './contacts/Contacts.js';
import NavBar from '../components/nav/NavBar.js';

class Routes extends Component {
  render() {
    return (
      <main className='route'>
        <Route path='/:page?' component={ToTop}/>
        <Switch>
          <Route path='/menu' component={Menu}/>
          <Route path='/about' component={About}/>
          <Route path='/order' component={Order}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/' component={Home}/>
        </Switch>
        <Route path='/:page?' component={NavBar}/>
      </main>
    );
  }
}

class ToTop extends Component {
  componentWillReceiveProps(next) {
    if(this.props.match.params.page !== next.match.params.page) {
      var animate = setInterval(function() {
        if(window.scrollY < 1) {
          clearInterval(animate);
          return;
        }
        window.scroll(0,window.scrollY-window.scrollY/32);
      });
      window.addEventListener('touchstart', function mobileTouch(e) {
        clearInterval(animate);
        window.removeEventListener('touchstart', mobileTouch);
      });
    }
  }
  render() {
    return null;
  }
}

export default Routes;