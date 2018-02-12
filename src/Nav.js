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
      navBg: false,
      home: true
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', (e) => this.handleScroll(e));
    this.pageChange(this.props);
  }
  componentWillReceiveProps(next) {
    this.pageChange(next);
  }
  pageChange(props) {
    if(!props.match.params.page) {
      this.setState({
        home: true
      });
    } else {
      this.setState({
        home: false
      });
    }
  }
  handleScroll(e) {
    const { navBg, home } = this.state;
    const { scrollY, innerHeight } = window;
    const height = home ? innerHeight : innerHeight * 7/10;
    if(navBg && scrollY < height) {
      this.setState({
        navBg: false
      });
    } else if(!navBg && scrollY >= height) {
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
      <nav className={navClass}>
        <div className='company'>
          <NavLink exact to='/'>
            <img src={logo} className='logo' alt='logo'/>
            <span>Lens Vision</span>
          </NavLink>
        </div>
        <div className='navbtn'
          tabIndex='0'
          onClick={(e) => this.toggleNav(e)}
          onBlur={(e) => this.handleBlur(e)}
        >Menu</div>
        <div className={navLinksClass}>
          <NavLink exact to='/' activeClassName={this.active}>Home</NavLink>
          <NavLink to='/about' activeClassName={this.active}>About</NavLink>
          <NavLink to='/services' activeClassName={this.active}>Service</NavLink>
          <NavLink to='/contacts' activeClassName={this.active}>Contact</NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;