import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import Cards from './Cards.js';
import scroll from './img/scroll.png';
import life from './img/life-thumb.jpg';
import travel from './img/travel-thumb.jpg';
import style from './img/style-thumb.jpg';

class Home extends Component {
  handleScroll(e) {
    let animate = setInterval(function() {
      if(window.scrollY >= window.innerHeight) {
        clearInterval(animate);
        return;
      }
      window.scroll(0,window.scrollY+window.innerHeight/128);
    });
  }
  render() {
    return (
      <Fragment>
        <header className='landing'>
          <h1>We Capture Memories.</h1>
          <h4>This is a template. None of this is real.</h4>
          <Link to='/service'>View Services</Link>
          <img src={scroll} alt='scroll' onClick={(e) => this.handleScroll(e)}/>
        </header>
        <article className='home-services'>
          <h2>What We Offer</h2>
          <Cards items={services} />
        </article>
      </Fragment>
    );
  }
}

const services = [
  {
    name: 'Life',
    description: 'We provide service for life events such as weddings and birthdays.',
    link: '/services#life',
    img: life
  },
  {
    name: 'Travel',
    description: 'We will accompany you in your travel as your personal photographer.',
    link: '/services#travel',
    img: travel
  },
  {
    name: 'Style',
    description: 'We do fashion, portaits and studio photoshoots.',
    link: '/services#style',
    img: style
  },
];

export default Home;