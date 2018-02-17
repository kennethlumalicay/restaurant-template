import React, { Component } from 'react';
import './css/contactForm.css';
import sgMail from './@sendgrid/mail';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
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
    };
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

    const key = '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';

    const { name, email, subject, message } = e.target;

    const composeSubj = 'LV - ' + subject.value;
    const composeMsg = `name: ${name.value}\n` +
      `email: ${email.value}\n` +
      `subject: ${subject.value}\n` +
      `\n${message.value}`;

    sgMail.setApiKey(key);
    const msg = {
      to: 'nethoinkz@gmail.com',
      from: 'noreply@lensvision.com',
      subject: composeSubj,
      text: composeMsg
    };
    sgMail.send(msg);
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