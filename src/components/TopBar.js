import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const TopBar = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a>Fit Roulette</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">
          Take a Spin
        </NavItem>
      </Nav>
      <Nav pullRight />
    </Navbar.Collapse>
  </Navbar>
);

export default TopBar;
