import React, { Component, Fragment } from 'react';
import './css/about.css';
import landing from './img/about-head.jpg';

class About extends Component {
  render() {
    return (
      <Fragment>
        <header className='about landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Are Family.</h1>
          <h4>We laugh. We cry. We live.</h4>
        </header>
        <article className='test'>
        </article>
      </Fragment>
    );
  }
}

export default About;