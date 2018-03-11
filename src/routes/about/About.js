import React, { Component, Fragment } from 'react';
import './about.css';
import landing from '../../img/landing.jpg';

class About extends Component {
  render() {
    return (
      <Fragment>
        <header className='about landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Are Family</h1>
          <h4>We're your brothers, sisters and your neighbors.</h4>
        </header>
        <section className='about-story'>
          <h1>About</h1>
        </section>
      </Fragment>
    );
  }
}

export default About;