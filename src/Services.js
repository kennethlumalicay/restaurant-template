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
        <section className='services-content'>
          <div className='content-desc'>
            <h1>Pick a plan that fit your needs.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lorem facilisis, bibendum sapien a, molestie orci.</p>
          </div>
          <hr />
          <CardSections items={services}/>
        </section>
      </Fragment>
    );
  }
}

export default Services;