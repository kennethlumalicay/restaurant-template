import React, { Component } from 'react';
import './nav.css';
import NavMenu from './NavMenu.js';
import navJson from './navJson.json';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      pastLanding: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.mutateHistory = this.mutateHistory.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', e => this.handleScroll(e));
  }

  handleScroll(e) {
    const { pastLanding } = this.state;
    const { scrollY, innerHeight } = window;
    const height = 1;
    if(scrollY < height && pastLanding) {
      this.setState({
        pastLanding: false
      });
    } else if(scrollY >= height && !pastLanding) {
      this.setState({
        pastLanding: true
      });
    }
  }
  
  handleToggle(toggle = true) {
    this.setState({
      expand: toggle && !this.state.expand
    });
  }

  mutateHistory(to) {
    this.props.history.push(to);
  }
  
  render() {
    const { expand, navBg, pastLanding } = this.state;
    const navBarClasses = (expand ? ' expand' : '') + (pastLanding ? ' navBg' : '');

    return (
      <nav className={ 'navbar' + navBarClasses }>
        <NavMenu name='📖' items={navJson.items} expand={this.handleToggle} main={true} mutateHistory={this.mutateHistory}/>
      </nav>
    );
  }
}

export default NavBar;