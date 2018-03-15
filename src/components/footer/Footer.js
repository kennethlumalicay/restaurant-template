import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div>
          <div className='company-info'>
            <p>Bonifacio's</p>
            <p>Traditional Filipino Restaurant</p>
            <p><a href='https://www.google.com/maps/place/?q=Central+Park+New+York+NY&zoom=13' target='_blank' rel='noopener noreferrer'>Central Park, New York, NY</a></p>
            <p><a href='mailto:example@bonifacio.com' target='_blank' rel='noopener noreferrer'>example@bonifacio.com</a></p>
            <p><a href='tel: 123-456-7890' target='_blank' rel='noopener noreferrer'>(123) 456 - 7890</a></p>
          </div>
          <div className='footer-navlinks'>
            <p><Link to='/home'>Home</Link></p>
            <p><Link to='/menu'>Menu</Link></p>
            <p><Link to='/about'>About</Link></p>
            <p><Link to='/order'>Order / Catering</Link></p>
            <p><Link to='/contacts'>Contact</Link></p>
          </div>
          <div className='dev-info'>
            <p>Photos were taken from <a href='https://unsplash.com/' target='_blank' rel='noopener noreferrer'>Unsplash</a>, <a href='https://www.pexels.com/' target='_blank' rel='noopener noreferrer'>Pexels</a> and <a href='https://pixabay.com/' target='_blank' rel='noopener noreferrer'>Pixabay</a>.</p>
            <p>Website made and designed by <a href='https://kennethlumalicay.github.io/' target='_blank' rel='noopener noreferrer'>Kenneth Malicay</a></p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;