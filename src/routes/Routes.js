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
  constructor(props) {
    super(props);
    this.animate = null;
    this.state = {
      scroll: window.scrollY
    };

    this.onScroll = this.onScroll.bind(this);
    this.mobileTouch = this.mobileTouch.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillReceiveProps(next) {
    const scope = this;
    if(this.props.match.params.page !== next.match.params.page) {
      this.animate = setInterval(function() {
        if(window.scrollY < 1 || window.scrollY-1 > scope.state.scroll) {
          clearInterval(scope.animate);
          window.removeEventListener('touchstart', scope.mobileTouch);
          window.addEventListener('scroll', scope.onScroll);
          return;
        }
        const val = ~~(window.scrollY-window.scrollY/16);
        window.scroll(0,val);
        scope.setState({
          scroll: val
        });
      });
      window.removeEventListener('scroll', this.onScroll);
      window.addEventListener('touchstart', this.mobileTouch);
    }
  }

  onScroll() {
    this.setState({
      scroll: window.scrollY
    });
  }

  mobileTouch(e) {
    clearInterval(this.animate);
    window.removeEventListener('touchstart', this.mobileTouch);
    window.addEventListener('scroll', this.onScroll);
  }

  render() {
    return null;
  }
}

export default Routes;