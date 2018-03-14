import React, { Component } from 'react';
import './menuItem.css';

class MenuItem extends Component {
  render() {
    const { name, description, price } = this.props;
    return (
      <div className='menu-item'>
        <h1>{name} ${price}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default MenuItem;