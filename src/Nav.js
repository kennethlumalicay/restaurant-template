import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/nav.css';
import logo from './img/logo.png';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.active = 'active-nav';
    this.state = {
      hideNav: true,
      navBg: false
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', (e) => this.handleScroll(e));
  }
  handleScroll(e) {
    const { navBg } = this.state;
    const { scrollY, innerHeight } = window;
    if(navBg && scrollY < innerHeight) {
      this.setState({
        navBg: false
      });
    } else if(!navBg && scrollY >= innerHeight) {
      this.setState({
        navBg: true
      });
    }
  }
  toggleNav(e) {
    this.setState({
      hideNav: !this.state.hideNav
    });
  }
  handleBlur(e) {
    setTimeout(() => {
      this.setState({
        hideNav: !this.state.hideNav
      });
    },150);
  }
  render() {
    const { hideNav, navBg } = this.state;
    const navLinksClass = 'navlinks' + (hideNav ? ' hide-nav' : '') + (navBg ? ' nav-bg' : '');
    const navClass = 'nav' + (navBg ? ' nav-bg' : '');

    return (
      <div className={navClass}>
        <nav className='company'>
          <NavLink exact to='/'>
            <img src={logo} className='logo' alt='logo'/>
            <span>Lens Vision</span>
          </NavLink>
        </nav>
        <div className='navbtn'
          tabIndex='0'
          onClick={(e) => this.toggleNav(e)}
          onBlur={(e) => this.handleBlur(e)}
        >Menu</div>
        <nav className={navLinksClass}>
          <NavLink exact to='/' activeClassName={this.active}>Home</NavLink>
          <NavLink to='/about' activeClassName={this.active}>About</NavLink>
          <NavLink to='/service' activeClassName={this.active}>Service</NavLink>
          <NavLink to='/contact' activeClassName={this.active}>Contact</NavLink>
        </nav>
      </div>
    );
  }
}

export default Nav;