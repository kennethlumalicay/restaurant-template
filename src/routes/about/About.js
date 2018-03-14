import React, { Component, Fragment } from 'react';
import './about.css';
import landing from '../../img/landing.jpg';
import aboutImg from '../../img/about-img.jpg';

class About extends Component {
  render() {
    return (
      <Fragment>
        <header className='about landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Are Family</h1>
          <h4>We're your brothers, sisters and your neighbors.</h4>
        </header>
        <section className='about-section'>
          <div>
            <h1>We are the ones who worked hard to bring the traditional taste of the Philippines right next to you.</h1>
            <p>Nam felis augue, efficitur ut est in, condimentum porttitor ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus urna, malesuada at augue ut, euismod venenatis erat. Etiam consectetur varius odio, ac faucibus elit dapibus ac. Fusce sit amet enim et augue mollis tempor ac eu dolor. Praesent ut sollicitudin libero. Nunc tempor egestas volutpat. Nullam ut egestas mi, in posuere risus. Proin pharetra, nulla eu vehicula vulputate, enim ex dignissim mi, bibendum pulvinar dolor neque eu libero. In nec odio vitae metus pretium hendrerit.</p>
          </div>
          <img src={aboutImg} alt='ph'/>
        </section>
      </Fragment>
    );
  }
}

export default About;