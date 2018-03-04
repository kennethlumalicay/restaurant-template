import React, { Component } from 'react';
import './css/contactForm.css';
//import mail from './mail.php';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sending: false
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

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    this.setState({
      sending: true
    })
    fetch('https://formspree.io/nethoinkz@gmail.com', {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message })
    }).then(res => {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
        sending: false
      });
    });
  }

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <form className='contact-form' onSubmit={e => this.handleSubmit(e)}>
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
        <input type='submit' value='Send'/>
      </form>
    );
  }
}

export default ContactForm;