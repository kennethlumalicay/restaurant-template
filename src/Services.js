import React, { Component, Fragment } from 'react';
import './css/services.css';
import landing from './img/services-head.jpg';
import CardSections from './CardSections.js';
import services from './servicesItems.js';

class Services extends Component {
  render() {
    return (
      <Fragment>
        <header className='services landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Do Our Best.</h1>
          <h4>Harder. Better. Faster. Stronger.</h4>
        </header>
        <article className='services-content'>
          <div className='content-desc'>
            <h1>Pick a plan that fit your needs.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lorem facilisis, bibendum sapien a, molestie orci. Sed mi nisl, commodo ac erat ut, lobortis aliquet nunc. Proin purus urna, cursus et augue iaculis, auctor molestie felis. Nunc feugiat, felis at elementum aliquet, lacus risus lobortis velit, ac eleifend diam leo sit amet lectus. Curabitur rutrum justo a eros rhoncus, id vestibulum justo sagittis. Praesent non urna et nibh commodo fringilla vel eget felis.</p>
          </div>
          <CardSections items={services}/>
        </article>
      </Fragment>
    );
  }
}

export default Services;