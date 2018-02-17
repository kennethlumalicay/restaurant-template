import React, { Component, Fragment } from 'react';
import './css/contacts.css';
import landing from './img/contacts-head.jpg';

class Contacts extends Component {
  render() {
    return (
      <Fragment>
        <header className='contacts landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Don't Bite.</h1>
          <h4>Talk to us.</h4>
        </header>
        <section className='test'>
        </section>
      </Fragment>
    );
  }
}

export default Contacts;