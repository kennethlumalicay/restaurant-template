import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ link = '/', name, aClass, toggleMain, mutateHistory }) => (
  <NavLink
    to={link}
    activeClassName={aClass}
    onClick={(event) => {
      toggleMain(event);
      mutateHistory(link);
    }}
    exact
  >{name}</NavLink>
);

export default NavItem;