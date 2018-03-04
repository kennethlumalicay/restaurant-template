import React, { Component } from 'react';
import './css/contactForm.css';
//import mail from './mail.php';
const formspree = 'https://formspree.io/nethoinkz@gmail.com';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sent: false
    }
  }

  getLimit(name) {
    switch(name) {
      case 'name':
      case 'email':
      case 'subject':
        return 30;
      case 'message':
        return 5000;
      default:
        return 30;
    }
  }

  handleChange(e) {
    const { name, value } = e.target;

    const truncVal = value.slice(0, this.getLimit(name));

    this.setState({
      [name]: truncVal
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(formspree, {
      method: 'post',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(event.target)
    }).then(response => {
      if(!response.ok) {
        return Promise.reject();
      }
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
        sent: true
      });
      return Promise.resolve();
    }).catch(error => {
      return;
    })
  }

  render() {
    const { name, email, subject, message, sent } = this.state;
    if(sent) {
      return (
        <div className='thankyou-form'>
          <h1>Thank you!</h1>
          <p>Aenean sodales orci quis sem varius iaculis. Duis sed quam ut ligula eleifend varius sit amet id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
      );
    }
    return (
      <form
        className='contact-form'
        onSubmit={e => this.handleSubmit(e)}
      >
        <label>
          <span>Name</span>
          <input
            type='text'
            name='name'
            placeholder='Barry Allen'
            onChange={e => this.handleChange(e)}
            value={name}
            required
            size='1'
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type='email'
            name='email'
            placeholder='example@domain.com'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            onChange={e => this.handleChange(e)}
            value={email}
            required
            size='1'
          />
        </label>
        <label>
          <span>Subject</span>
          <input
            type='text'
            name='subject'
            placeholder='(optional)'
            onChange={e => this.handleChange(e)}
            value={subject}
            size='1'
          />
        </label>
        <div>
          <span>Message</span>
          <textarea
            name='message'
            onChange={e => this.handleChange(e)}
            placeholder='Let us know what you think'
            value={message}
            required
          />
          <sup>{message.length} characters</sup>
        </div>
        <input type='hidden' name='_next' value='/contacts'/>
        <input type='hidden' name='_subject' value={subject}/>
        <input type='submit' value='Send'/>
      </form>
    );
  }
}

export default ContactForm;