import React, { Component, Fragment } from 'react';
import './contactForm.css';
const formspree = 'https://formspree.io/nethoinkz@gmail.com';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      phone: '',
      address: '',
      sent: false,
      type: props.isContacts ? 'feedback' : 'order'
    }
  }

  getLimit(name) {
    switch(name) {
      case 'name':
      case 'email':
      case 'subject':
      case 'phone':
      case 'address':
        return 30;
      case 'message':
        return 5000;
      default:
        return 30;
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    const truncVal = value.slice(0, this.getLimit(name));

    this.setState({
      [name]: truncVal
    });
  }

  handleRadio(event) {
    this.setState({
      type: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { subject, type } = this.state;
    const formData = new FormData(event.target);
    formData.append('_next', type === 'contacts' ? '/contacts' : '/order');
    formData.append('_subject', `${type} - ${subject || 'No Subject'}`);
    formData.append('type', type);

    // for(const pair of formData.entries()) {
    //   console.log(pair.toString());
    // }

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
        phone: '',
        address: '',
        sent: true
      });
      return Promise.resolve();
    }).catch(error => {
      return;
    });
  }

  render() {
    const { name, email, subject, message, phone, address, sent } = this.state;
    const { isContacts } = this.props;
    if(sent) {
      return (
        <div className='thankyou-form'>
          <h1>Thank you!</h1>
          { isContacts
            ? <p>We will make sure to read your feedback.</p>
            : <p>We will be contacting you shortly.</p>
          }
        </div>
      );
    }
    return (
      <form
        className='contact-form'
        onSubmit={e => this.handleSubmit(e)}
      >
        { isContacts
          ? null
          : (
          <div className='radio-group' onChange={e => this.handleRadio(e)}>
            <label className='radio'>
              <span>Order</span>
              <input
                type='radio'
                name='type'
                value='order'
                defaultChecked
              />
            </label>
            <label className='radio'>
              <span>Catering</span>
              <input
                type='radio'
                name='type'
                value='catering'
              />
            </label>
          </div>
        )}
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
            required={isContacts}
            size='1'
          />
        </label>
        <label>
          <span>Phone</span>
          <input
            type='tel'
            name='phone'
            placeholder='123-456-7890'
            onChange={e => this.handleChange(e)}
            value={phone}
            required={!isContacts}
            size='1'
          />
        </label>
        { isContacts
          ? null
          : (
            <label>
              <span>Address</span>
              <input
                type='text'
                name='address'
                placeholder='Your Street, New York, NY 12345'
                onChange={e => this.handleChange(e)}
                value={address}
                required
                size='1'
              />
            </label>
          )
        }
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
            placeholder={`Let us know what you ${isContacts ? 'think' : 'want'}`}
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