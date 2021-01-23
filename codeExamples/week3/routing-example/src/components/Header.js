import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <HeaderNavItem exact to="/" name="Blog" />
      <HeaderNavItem to="/about" name="About" />
      <HeaderNavItem to="/contact" name="Contact" />
    </header>
  );
}

function HeaderNavItem(props) {
  return (
    <NavLink
      to={props.to}
      className="nav-item"
      exact={props.exact ? true : false}
      activeClassName="active"
    >
      {props.name}
    </NavLink>
  );
}