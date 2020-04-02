import React from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

const Menu = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <FontAwesomeIcon icon="basketball-ball" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="Information" id="info">
          <LinkContainer to="/info/about">
            <MenuItem eventKey={1.1}>About</MenuItem>
          </LinkContainer>
          <LinkContainer to="/info/rules">
            <MenuItem eventKey={1.2}>Rules</MenuItem>
          </LinkContainer>
          <LinkContainer to="/info/rewards">
            <MenuItem eventKey={1.3}>Rewards</MenuItem>
          </LinkContainer>
          <LinkContainer to="/info/join">
            <MenuItem eventKey={1.4}>Join</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown eventKey={2} title="SIBA" id="siba">
          <LinkContainer to="/siba/standings">
            <MenuItem eventKey={2.1}>League Standings</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/owners">
            <MenuItem eventKey={2.2}>Owners</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/dbl">
          <NavItem eventKey={3}>DBL</NavItem>
        </LinkContainer>
        <LinkContainer to="/transactions">
          <NavItem eventKey={4}>Transactions</NavItem>
        </LinkContainer>
        <LinkContainer to="/freeagents">
          <NavItem eventKey={5}>Free Agents</NavItem>
        </LinkContainer>
        <LinkContainer to="/upload">
          <NavItem eventKey={6}>Upload</NavItem>
        </LinkContainer>
        <LinkContainer to="/download">
          <NavItem eventKey={7}>League File</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
