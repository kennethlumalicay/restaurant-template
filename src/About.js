import React, { Component, Fragment } from 'react';
import './css/about.css';
import landing from './img/about-head.jpg';
import team1 from './img/team1.jpg';
import team2 from './img/team2.jpg';
import team3 from './img/team3.jpg';

class About extends Component {
  render() {
    return (
      <Fragment>
        <header className='about landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Are Family.</h1>
          <h4>We laugh. We cry. We live.</h4>
        </header>
        <section className='about-pics'>
          <h1>We're a team that rolls together.</h1>
          <p>Cras vehicula ultricies est, id sagittis ipsum blandit ultricies. Sed vitae lorem malesuada, pulvinar magna rutrum, condimentum nulla. Duis eget dui a orci viverra vulputate. Nunc tincidunt neque id molestie ultrices. Curabitur tortor sem, varius tempor sollicitudin rhoncus, egestas a libero.</p>
          <div>
            <div style={{backgroundImage: `url(${team1})`}}/>
            <div style={{backgroundImage: `url(${team2})`}}/>
            <div style={{backgroundImage: `url(${team3})`}}/>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default About;