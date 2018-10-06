import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import './App.css';

class Menu extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">[img here]</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="SIBA">
                            <MenuItem eventKey={1.1}>League Standings</MenuItem>
                            <MenuItem eventKey={1.2}>League Leaders</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="DBL">
                            <MenuItem eventKey={2.1}>League Standings</MenuItem>
                            <MenuItem eventKey={2.2}>League Leaders</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="#">Transactions</NavItem>
                        <NavDropdown eventKey={4} title="Free Agents">
                            <MenuItem eventKey={4.1}>Players</MenuItem>
                            <MenuItem eventKey={4.2}>Coaches</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={5} href="#">Upload</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;