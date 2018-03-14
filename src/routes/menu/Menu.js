import React, { Component, Fragment } from 'react';
import './menu.css';
import landing from '../../img/landing.jpg';
import menuJson from './menuJson.json';
import MenuItem from '../../components/menu-item/MenuItem.js';

class Menu extends Component {
  render() {
    const menuItems = menuJson.items.map((e,i) => <MenuItem key={e.name} {...e}/>);
    return (
      <Fragment>
        <header className='landing-sub' style={{backgroundImage: `url(${landing})`}}>
          <h1>Menu</h1>
          <h4>Get a taste of traditional filipino home cooking.</h4>
        </header>
        <section className='menu-section'>
          <div className='menu-items-container'>
            { menuItems }
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Menu;