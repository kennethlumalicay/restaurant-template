import React, { Component, Fragment } from 'react';
import './contacts.css';
import landing from '../../img/contacts-head.jpg';
import ContactForm from '../../components/contact-form/ContactForm.js';

class Contacts extends Component {
  render() {
    return (
      <Fragment>
        <header className='contacts landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Don't Bite</h1>
          <h4>Talk to us.</h4>
        </header>
        <section className='contact-us'>
          <div>
            <h1>Reach us.</h1>
            <p>We would love to hear what you have to say about our food and service. Help us improve by letting us know what you think.</p>
            <p>You could aso reach us at:</p>
            <p><a href='mailto:example@bonifacio.com' target='_blank' rel='noopener noreferrer'>example@bonifacio.com</a></p>
            <p><a href='tel: 123-456-7890' target='_blank' rel='noopener noreferrer'>(123) 456 - 7890</a></p>
          </div>
          <ContactForm isContacts={true}/>
        </section>
      </Fragment>
    );
  }
}

export default Contacts;