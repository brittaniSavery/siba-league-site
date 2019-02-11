import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

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
                    <LinkContainer to="/info/join">
                        <MenuItem eventKey={1.4}>Join</MenuItem>
                    </LinkContainer>
                </NavDropdown>
                <NavDropdown eventKey={2} title="SICBA" id="siba">
                    <LinkContainer to="/sicba/owners">
                        <MenuItem eventKey={2.1}>Owners</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/sicba/rankings">
                        <MenuItem eventKey={2.2}>Team Rankings</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/sicba/standings">
                        <MenuItem eventKey={2.3}>Division Standings</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/sicba/schedule">
                        <MenuItem eventKey={2.4}>Schedule</MenuItem>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Menu;