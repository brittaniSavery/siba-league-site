import React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoBlank from "../images/logo-blank.svg";
import collegeLogo from "../images/sicba-logo-blank.svg";

const Menu = () => (
  <Navbar fixedTop id="custom-nav-bar">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <span>
            <img src={logoBlank} alt="SIBA Logo" />
            &nbsp;SIBA
          </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/about">
          About
        </NavItem>
        <NavDropdown eventKey={2} title="SIBA" id="siba">
          <MenuItem eventKey={2.1} href="/siba/rules">
            Rules
          </MenuItem>
          <MenuItem eventKey={2.2} href="/siba/standings">
            League Standings
          </MenuItem>
          <MenuItem eventKey={2.3} href="/siba/leaders">
            League Leaders
          </MenuItem>
          <MenuItem eventKey={2.4} href="/siba/transactions">
            Transactions
          </MenuItem>
          <MenuItem eventKey={2.5} href="/siba/free-agents">
            Free Agents
          </MenuItem>
          <MenuItem eventKey={2.6} href="/siba/available-coaches">
            Available Coaches
          </MenuItem>
          <MenuItem eventKey={2.7} href="/siba/owners">
            Owners
          </MenuItem>
          <MenuItem eventKey={2.8} href="/siba/rewards">
            Rewards
          </MenuItem>
          <MenuItem eventKey={2.9} href="/siba/downloads">
            Downloads
          </MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={3} title="College" id="college">
          <MenuItem eventKey={3.1} href="/college/rules">
            Rules
          </MenuItem>
          <MenuItem eventKey={3.2} href="/college/standings">
            League Standings
          </MenuItem>
          <MenuItem eventKey={3.3} href="/college/rankings">
            Pre-season Tier Rankings
          </MenuItem>
          <MenuItem eventKey={3.4} href="/college/coaches">
            Head Coaches
          </MenuItem>
          <MenuItem eventKey={3.5} href="/college/downloads">
            Downloads
          </MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={4} title="DBL" id="dbl">
          <MenuItem eventKey={4.1} href="/dbl/standings">
            League Standings
          </MenuItem>
          <MenuItem eventKey={4.2} href="/dbl/leaders">
            League Leaders
          </MenuItem>
        </NavDropdown>
        <NavItem eventKey={5} href="/upload">
          Upload
        </NavItem>
        <NavItem eventKey={6} href="/join">
          Join
        </NavItem>
      </Nav>
      <Navbar.Text pullRight>
        Associated Leagues:&nbsp;
        <img src={collegeLogo} className="nav-img" alt="SICBA Logo" />
        SICBA
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
