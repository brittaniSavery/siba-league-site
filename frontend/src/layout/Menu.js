import React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import logoBlank from "../images/logo-blank.svg";

const Menu = () => (
  <Navbar fixedTop id="custom-nav-bar">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <img
            src={logoBlank}
            className="nav-img"
            style={{ height: "5vh", display: "inline" }}
            alt=""
          />{" "}
          <span>SIBA</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/about">
          <NavItem eventKey={1}>About</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={2} title="SIBA" id="siba">
          <LinkContainer to="/siba/rules">
            <MenuItem eventKey={2.1}>Rules</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/standings">
            <MenuItem eventKey={2.2}>League Standings</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/leaders">
            <MenuItem eventKey={2.3}>League Leaders</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/transactions">
            <MenuItem eventKey={2.4}>Transactions</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/free-agents-players">
            <MenuItem eventKey={2.5}>Player Free Agents</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/free-agents-coaches">
            <MenuItem eventKey={2.6}>Coach Free Agents</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/owners">
            <MenuItem eventKey={2.7}>Owners</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/rewards">
            <MenuItem eventKey={2.8}>Rewards</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/downloads">
            <MenuItem eventKey={2.9}>Downloads</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown eventKey={3} title="College" id="college">
          <LinkContainer to="/college/rules">
            <MenuItem eventKey={3.1}>Rules</MenuItem>
          </LinkContainer>
          <LinkContainer to="/college/standings">
            <MenuItem eventKey={3.2}>League Standings</MenuItem>
          </LinkContainer>
          <LinkContainer to="/college/coaches">
            <MenuItem eventKey={3.3}>Head Coaches</MenuItem>
          </LinkContainer>
          <LinkContainer to="/college/downloads">
            <MenuItem eventKey={3.4}>Downloads</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown eventKey={4} title="DBL" id="dbl">
          <LinkContainer to="/dbl/standings">
            <MenuItem eventKey={4.1}>League Standings</MenuItem>
          </LinkContainer>
          <LinkContainer to="/dbl/leaders">
            <MenuItem eventKey={4.2}>League Leaders</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/upload">
          <NavItem eventKey={6}>Upload</NavItem>
        </LinkContainer>
        <LinkContainer to="/join">
          <NavItem eventKey={8}>Join</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
