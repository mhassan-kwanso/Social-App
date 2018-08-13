import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

import Signup from "./signup";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse={true} bsStyle="inverse">
          <Navbar.Header>
            <Navbar.Brand>Socialite</Navbar.Brand>
          </Navbar.Header>
          <Nav pullright="true">
            <NavItem eventKey={1} href="#">
              Sign In
            </NavItem>
          </Nav>
        </Navbar>
        <Signup />
      </div>
    );
  }
}

export default Header;
