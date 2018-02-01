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
          <Link to='/'>lens@vision7X.com</Link>
          <Link to='/'>(777)777-777X</Link>
        </div>
        <div>
          <Link to='/about'>Team</Link>
          <Link to='/contact'>Careers</Link>
          <Link to='/contact'>Help</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div>
          <Link to='/'>ToS</Link>
          <Link to='/'>Privacy</Link>
        </div>
        <div className='dev-info'>
          <span>Photos were taken from <a href='https://unsplash.com/' target='_blank' rel='noopener noreferrer'>Unsplash</a></span>
          <span>Template and Logo made by <a href='https://kennethlumalicay.github.io/' target='_blank' rel='noopener noreferrer'>Kenneth Malicay</a></span>
        </div>
      </footer>
    );
  }
}

export default Footer;