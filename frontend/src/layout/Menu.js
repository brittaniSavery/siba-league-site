import React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./layout.css";
import logoBlank from "../images/logo-blank.svg";

const Menu = () => (
  <Navbar id="custom-nav-bar">
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
          <MenuItem eventKey={1}>About</MenuItem>
        </LinkContainer>
        <NavDropdown eventKey={2} title="SIBA" id="siba">
          <LinkContainer to="/siba/rules">
            <MenuItem eventKey={2.1}>Rules</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/standings">
            <MenuItem eventKey={2.2}>League Standings</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/owners">
            <MenuItem eventKey={2.3}>Owners</MenuItem>
          </LinkContainer>
          <LinkContainer to="/siba/rewards">
            <MenuItem eventKey={2.4}>Rewards</MenuItem>
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
        <LinkContainer to="/join">
          <NavItem eventKey={8}>Join</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
