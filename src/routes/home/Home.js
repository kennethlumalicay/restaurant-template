import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import landing from '../../img/landing.jpg';
import food0 from '../../img/food0.jpg';
import food1 from '../../img/food1.jpg';
import food2 from '../../img/food2.jpg';
import food3 from '../../img/food3.jpg';
import food4 from '../../img/food4.jpg';
import food5 from '../../img/food5.jpg';
import food6 from '../../img/food6.jpg';
import food7 from '../../img/food7.jpg';
import Gmap from '../../components/gmap/Gmap.js';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className='landing-sub handwritten' style={{backgroundImage: `url(${landing})`}}>
          <h1>Bonifacio's</h1>
          <h4>Traditional filipino taste.</h4>
        </header>
        <section className='home-section'>
          <section className='food-teaser'>
            <img src={food0} alt='yum'/>
            <img src={food1} alt='yum'/>
            <img src={food2} alt='yum'/>
            <img src={food3} alt='yum'/>
            <img src={food4} alt='yum'/>
            <img src={food5} alt='yum'/>
            <img src={food6} alt='yum'/>
            <img src={food7} alt='yum'/>
          </section>
          <section className='home-hours-loc'>
            <i className='far fa-clock fa-3x'/>
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
            <i className='far fa-compass fa-3x'/>
            <div>
              <h1>Store Location</h1>
              <p>Epifanio de los Santos Ave, Ortigas Center</p>
              <p>Mandaluyong, Metro Manila</p>  
            </div>
            <div className='gmap-container'>
              <Gmap />
            </div>
          </section>
        </section>
      </Fragment>
    );
  }
}

export default Home;