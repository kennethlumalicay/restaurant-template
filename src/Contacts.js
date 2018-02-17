import React, { Component, Fragment } from 'react';
import './css/contacts.css';
import landing from './img/contacts-head.jpg';
import ContactForm from './ContactForm.js';

class Contacts extends Component {
  render() {
    return (
      <Fragment>
        <header className='contacts landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>We Don't Bite.</h1>
          <h4>Talk to us.</h4>
        </header>
        <section className='contact-us'>
          <div>
            <h1>Reach us.</h1>
            <p>Malesuada fames ac turpis egestas sed tempus urna. Id cursus metus aliquam eleifend mi in nulla posuere. Libero volutpat sed cras ornare arcu dui vivamus arcu. Quis viverra nibh cras pulvinar mattis nunc.</p>
          </div>
          <ContactForm />
        </section>
      </Fragment>
    );
  }
}

export default Contacts;