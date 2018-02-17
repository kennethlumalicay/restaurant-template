import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='company-info'>
          <span>Lens Vision</span>
          <span>77X Charizard St. Ave E. Arbok New York, 77777X</span>
          <Link to='/contacts'>lens@vision7X.com</Link>
          <Link to='/contacts'>(777)777-777X</Link>
        </div>
        <div>
          <Link to='/about'>Team</Link>
          <Link to='/contacts'>Careers</Link>
          <Link to='/contacts'>Help</Link>
          <Link to='/contacts'>Contact</Link>
        </div>
        <div>
          <Link to='/'>ToS</Link>
          <Link to='/'>Privacy</Link>
        </div>
        <div className='dev-info'>
          <span>Photos were taken from <a href='https://unsplash.com/' target='_blank' rel='noopener noreferrer'>Unsplash</a></span>
          <span>Website and logo made and designed by <a href='https://kennethlumalicay.github.io/' target='_blank' rel='noopener noreferrer'>Kenneth Malicay</a></span>
        </div>
      </footer>
    );
  }
}

export default Footer;