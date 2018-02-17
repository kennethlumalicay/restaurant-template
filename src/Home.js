import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import Cards from './Cards.js';
import scroll from './img/scroll.png';
import services from './servicesItems.js';

class Home extends Component {
  handleScroll(e) {
    let animate = setInterval(function() {
      if(window.scrollY >= window.innerHeight) {
        clearInterval(animate);
        return;
      }
      window.scroll(0,window.scrollY+(window.innerHeight+64-window.scrollY)/32);
      window.addEventListener('touchstart', function mobileTouch(e) {
        clearInterval(animate);
        window.removeEventListener('touchstart', mobileTouch);
      });
    });
  }
  render() {
    return (
      <Fragment>
        <header className='landing'>
          <h1>We Capture Memories.</h1>
          <h4>This is a template. None of this is real.</h4>
          <Link to='/services'>View Services</Link>
          <img src={scroll} alt='scroll' onClick={(e) => this.handleScroll(e)}/>
        </header>
        <section className='home-services'>
          <h2>What We Offer</h2>
          <Cards items={services} type='card' linkText='Learn more'/>
        </section>
      </Fragment>
    );
  }
}

export default Home;