import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  * as DisplayPages from './DisplayPages.jsx';
import Upload from './Upload.js';
import Join from './Join.js';
import './App.css';

const Menu = () => (
    <Router basename="/newsite">
        <div>
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
            <Route exact path="/" component={DisplayPages.Home} />
            <Route path="/info/about" component={DisplayPages.About} />
            <Route path="/info/rules" component={DisplayPages.Rules} />
            <Route path="/info/rewards" component={DisplayPages.Rewards} />
            <Route path="/info/join" component={Join} />
            <Route path="/siba/standings" component={DisplayPages.SibaStandings} />
            <Route path="/siba/leaders" component={DisplayPages.SibaLeaders} />
            <Route path="/siba/owners" component={DisplayPages.Owners} />
            <Route path="/dbl/standings" component={DisplayPages.DblStandings} />
            <Route path="/dbl/leaders" component={DisplayPages.DblLeaders} />
            <Route path="/transactions" component={DisplayPages.Transactions} />
            <Route path="/fa/players" component={DisplayPages.FaPlayers} />
            <Route path="/fa/coaches" component={DisplayPages.FaCoaches} />
            <Route path="/upload" component={Upload} />
        </div>
    </Router>
);

export default Menu;