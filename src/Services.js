import React, { Component, Fragment } from 'react';
import './css/services.css';
import landing from './img/services-head.jpg';

class Services extends Component {
  render() {
    return (
      <Fragment>
        <header className='services landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Do Our Best.</h1>
          <h4>Harder. Better. Faster. Stronger.</h4>
        </header>
        <article className='test'>
        </article>
      </Fragment>
    );
  }
}

export default Services;