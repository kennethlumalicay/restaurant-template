import React, { Component, Fragment } from 'react';
import './css/services.css';
import landing from './img/services-head.jpg';
import life from './img/life-thumb.jpg';
import travel from './img/travel-thumb.jpg';
import style from './img/style-thumb.jpg';

class Services extends Component {
  render() {
    return (
      <Fragment>
        <header className='services landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Do Our Best.</h1>
          <h4>Harder. Better. Faster. Stronger.</h4>
        </header>
        <article className='test'>
          <div>
            <h1>Pick a plan that fits your needs.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lorem facilisis, bibendum sapien a, molestie orci. Sed mi nisl, commodo ac erat ut, lobortis aliquet nunc. Proin purus urna, cursus et augue iaculis, auctor molestie felis. Nunc feugiat, felis at elementum aliquet, lacus risus lobortis velit, ac eleifend diam leo sit amet lectus. Curabitur rutrum justo a eros rhoncus, id vestibulum justo sagittis. Praesent non urna et nibh commodo fringilla vel eget felis.</p>
          </div>
          <div id='life'>
          </div>
          <div id='travel'>
          </div>
          <div id='style'>
          </div>
        </article>
      </Fragment>
    );
  }
}

export const items = [
  {
    name: 'Life',
    description: 'We provide service for life events such as weddings and birthdays.',
    link: '/services#life',
    img: life,
  },
  {
    name: 'Travel',
    description: 'We will accompany you in your travel as your personal photographer.',
    link: '/services#travel',
    img: travel,
  },
  {
    name: 'Style',
    description: 'We do fashion, portaits and studio photoshoots.',
    link: '/services#style',
    img: style,
  },
];

export default Services;