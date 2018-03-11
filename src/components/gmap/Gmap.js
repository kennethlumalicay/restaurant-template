import React, { Component } from 'react';
import './gmap.css';

class Gmap extends Component {
  render() {
    return (
      <iframe className='gmap' src='//www.google.com/maps/embed/v1/place?q=SM%20Megamall&zoom=13&key=AIzaSyCA3gM26IAsAPaa-MR6fi4feyPFpxam3_s'>
      </iframe>
    );
  }
}

export default Gmap;