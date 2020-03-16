import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

const Menu = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/"><FontAwesomeIcon icon="basketball-ball"/></Link>
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
                    <LinkContainer to="/siba/leaders">
                        <MenuItem eventKey={2.2}>League Leaders</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/siba/owners">
                        <MenuItem eventKey={2.3}>Owners</MenuItem>
                    </LinkContainer>
                </NavDropdown>
                <NavDropdown eventKey={3} title="DBL" id="dbl">
                    <LinkContainer to="/dbl/standings">
                        <MenuItem eventKey={3.1}>League Standings</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/dbl/leaders">
                        <MenuItem eventKey={3.2}>League Leaders</MenuItem>
                    </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/transactions">
                    <NavItem eventKey={4}>Transactions</NavItem>
                </LinkContainer>
                <NavDropdown eventKey={5} title="Free Agents" id="fa">
                    <LinkContainer to="/fa/players">
                        <MenuItem eventKey={5.1}>Players</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/fa/coaches">
                        <MenuItem eventKey={5.2}>Coaches</MenuItem>
                    </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/upload">
                    <NavItem eventKey={6}>Upload</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Menu;