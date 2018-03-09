import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import ios from '../../img/app-ios.svg';
import google from '../../img/app-google.svg';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div>
          <div className='company-info'>
            <span>Lens Vision</span>
            <span>77X Charizard St. Arbok New York, 7X777</span>
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
            <Link to='/'>Press</Link>
            <Link to='/'>Test</Link>
          </div>
          <div className='get-app'>
            <span>Get our app</span>
            <img src={ios} alt='ios'/>
            <img src={google} alt='google'/>
          </div>
          <div className='dev-info'>
            <span>Photos were taken from <a href='https://unsplash.com/' target='_blank' rel='noopener noreferrer'>Unsplash</a></span>
            <span>Website and logo made and designed by <a href='https://kennethlumalicay.github.io/' target='_blank' rel='noopener noreferrer'>Kenneth Malicay</a></span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;