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
                        <NavDropdown eventKey={1} title="Information">
                            <MenuItem eventKey={1.1}>Creators</MenuItem>
                            <MenuItem eventKey={1.2}>Rules</MenuItem>
                            <MenuItem eventKey={1.3}>Rewards</MenuItem>
                            <MenuItem eventKey={1.3}>Join</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="SIBA">
                            <MenuItem eventKey={2.1}>League Standings</MenuItem>
                            <MenuItem eventKey={2.2}>League Leaders</MenuItem>
                            <MenuItem eventKey={2.2}>Owners</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="DBL">
                            <MenuItem eventKey={3.1}>League Standings</MenuItem>
                            <MenuItem eventKey={3.2}>League Leaders</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#">Transactions</NavItem>
                        <NavDropdown eventKey={5} title="Free Agents">
                            <MenuItem eventKey={5.1}>Players</MenuItem>
                            <MenuItem eventKey={54.2}>Coaches</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={6} href="#">Upload</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;