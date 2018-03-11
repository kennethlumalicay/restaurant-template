import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import landing from '../../img/landing.jpg';
import Gmap from '../../components/gmap/Gmap.js';

// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack/42118728
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const foodGallery = importAll(require.context('../../img/food', false, /\.(jpe?g)$/));

class Home extends Component {
  render() {
    const imgKeys = Object.keys(foodGallery);
    const images = imgKeys.map(e => <Link to='/menu' key={e}><img src={foodGallery[e]} alt={e}/></Link>);

    return (
      <Fragment>
        <header className='landing-sub handwritten' style={{backgroundImage: `url(${landing})`}}>
          <h1>Bonifacio's</h1>
          <h4>Traditional filipino taste.</h4>
        </header>
        <section className='home-section'>
          <section className='food-teaser'>
            { images }
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