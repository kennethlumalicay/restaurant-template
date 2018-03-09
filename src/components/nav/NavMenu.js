import React, { Component } from 'react';
import NavItem from './NavItem.js';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
      lessThan768: window.innerWidth < 768
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.windowWatcher = this.windowWatcher.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  componentDidMount() {
    if(window) {
      window.addEventListener('resize', this.windowWatcher);
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.windowWatcher);
  }
  
  windowWatcher(event) {
    const { lessThan768 } = this.state;
    const { expand, main } = this.props;
    if(window.innerWidth < 768 && !lessThan768) {
      this.setState({
        lessThan768: true,
        showItems: false
      });
      if(main)
        expand(false);
    } else if(window.innerWidth >= 768 && lessThan768) {
      this.setState({
        lessThan768: false,
        showItems: false
      });
      if(main)
        expand(false);
    }
  }
  
  createMenuItems() {
    const { items, main, expand, mutateHistory } = this.props;
    const toggleMain = main || !this.state.lessThan768
      ? this.toggleMenu
      : this.props.toggleMain;
    return items.map(item => (
      <li key={ item.name }>
        {
          item.items
            ? <Menu {...item} toggleMain={toggleMain} expand={expand} mutateHistory={mutateHistory}/>
            : <NavItem {...item} toggleMain={toggleMain} mutateHistory={mutateHistory}/>
        }
      </li>
    ));
  }
  
  toggleMenu(event) {
    event.preventDefault();
    const { main, expand } = this.props;
    this.setState({
      showItems: !this.state.showItems
    });
    if(main && this.state.lessThan768)
      expand();
  }
  
  handleBlur(event) {
    const { expand, main } = this.props;
    const { currentTarget } = event;
    setTimeout(() => {
      if(!currentTarget.contains(document.activeElement)) {
        this.setState({
          showItems: false
        });
        if(main) {
          expand(false);
        }
      }
    },0);
  }
  
  render() {
    const { name, main } = this.props;
    const { showItems, lessThan768 } = this.state;
    const menuItems = this.createMenuItems();
    const navMenuAddClass = (main ? ' main' : '') + (showItems ? ' shown' : '');
    const showNav = main && !lessThan768;
    
    return (
      <div className={ 'nav-menu' + navMenuAddClass } onBlur={this.handleBlur}>
        <div className='nav-menu-btn'>
          <button onClick={this.toggleMenu}>
            {
              main
                ? (
                  <div id='burger' className={showItems || showNav ? 'cross' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )
                : name
            }
          </button>
        </div>
        {
          showItems || showNav
            ? (
              <div className='nav-menu-list'>
                <ul>
                  { menuItems }
                </ul>
              </div>
            )
            : null
        }
      </div>
    );
  }
}

export default Menu;