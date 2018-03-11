import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import landing from '../../img/landing.jpg';

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <header className='landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>Menu</h1>
          <h4>Get a taste of home.</h4>
        </header>
        <section className='home-services'>
          <h1>What We Offer</h1>
        </section>
      </Fragment>
    );
  }
}

export default Menu;