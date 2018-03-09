import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import landing from '../../img/landing.jpg';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className='landing-sub handwritten' style={{backgroundImage: `url(${landing})`}}>
          <h1>Bonifacio</h1>
          <h4>Traditional filipino taste.</h4>
        </header>
        <section className='home-section'>
          <div className='store-hours'>
            <h1>Store Hours</h1>
            <div>
              <p>Monday - Friday</p>
              <p>6am - 8pm</p>
            </div>
            <div>
              <p>Saturday - Sunday</p>
              <p>10am - 8pm</p>
            </div>
          </div>
          <div className='store-location'>
            <h1>Store Location</h1>
            <p>Lot 1, Block 13, Example St.</p>
            <p>Taytay, Rizal</p>  
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;