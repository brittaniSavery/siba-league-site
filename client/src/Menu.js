import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Upload from './Upload.js'
import './App.css';

const Menu = () => (
    <Router>
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">[img here]</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="Information">
                            <MenuItem eventKey={1.1}>
                                <Link to="/info/creators">Creators</Link>
                            </MenuItem>
                            <MenuItem eventKey={1.2}>
                                <Link to="/info/rules">Rules</Link>
                            </MenuItem>
                            <MenuItem eventKey={1.3}>
                                <Link to="/info/rewards">Rewards</Link>
                            </MenuItem>
                            <MenuItem eventKey={1.4}>
                                <Link to="/info/join">Join</Link>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="SIBA">
                            <MenuItem eventKey={2.1}>
                                <Link to="/siba/standings">League Standings</Link>
                            </MenuItem>
                            <MenuItem eventKey={2.2}>
                                <Link to="/siba/leaders">League Leaders</Link>
                            </MenuItem>
                            <MenuItem eventKey={2.3}>
                                <Link to="/siba/owners">Owners</Link>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="DBL">
                            <MenuItem eventKey={3.1}>
                                <Link to="/dbl/standings">League Standings</Link>
                            </MenuItem>
                            <MenuItem eventKey={3.2}>
                                <Link to="/dbl/leaders">League Leaders</Link>
                            </MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4}>
                            <Link to="/transactions">Transactions</Link>
                        </NavItem>
                        <NavDropdown eventKey={5} title="Free Agents">
                            <MenuItem eventKey={5.1}>
                                <Link to="/fa/players">Players</Link>
                            </MenuItem>
                            <MenuItem eventKey={5.2}>
                                <Link to="/fa/coaches">Coaches</Link>
                            </MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={6}>
                            <Link to="/upload">Upload</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={Home} />
            <Route path="/info/creators" component={Creators} />
            <Route path="/info/rules" component={Rules} />
            <Route path="/info/rewards" component={Rewards} />
            <Route path="/info/join" component={Join} />
            <Route path="/siba/standings" component={SibaStandings} />
            <Route path="/siba/leaders" component={SibaLeaders} />
            <Route path="/siba/owners" component={Owners} />
            <Route path="/dbl/standings" component={DblStandings} />
            <Route path="/dbl/leaders" component={DblLeaders} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/fa/players" component={FaPlayers} />
            <Route path="/fa/coaches" component={FaCoaches} />
            <Route path="/upload" component={Upload} />
        </div>
    </Router>
);

const Home = () => (
    <section>
        <header>
            <h2>Welcome</h2>
        </header>
    </section>
);

const Creators = () => (
    <section>
        <header>
            <h2>Creators</h2>
        </header>
    </section>
);
const Owners = () => (
    <section>
        <header>
            <h2>SIBA Owners</h2>
        </header>
    </section>
);

const Rules = () => (
    <section>
        <header>
            <h2>Rules</h2>
        </header>
    </section>
);

const Rewards = () => (
    <section>
        <header>
            <h2>Rewards</h2>
        </header>
    </section>
);

const Join = () => (
    <section>
        <header>
            <h2>Join</h2>
        </header>
    </section>
);
const DblStandings = () => (
    <section>
        <header>
            <h2>DBL Standings</h2>
        </header>
    </section>
);
const DblLeaders = () => (
    <section>
        <header>
            <h2>DBL Leaders</h2>
        </header>
    </section>
);
const SibaLeaders = () => (
    <section>
        <header>
            <h2>SIBA Leaders</h2>
        </header>
    </section>
);

const SibaStandings = () => (
    <section>
        <header>
            <h2>SIBA Standings</h2>
        </header>
    </section>
);
const Transactions = () => (
    <section>
        <header>
            <h2>Transactions</h2>
        </header>
    </section>
);
const FaPlayers = () => (
    <section>
        <header>
            <h2>Free Agents: Players</h2>
        </header>
    </section>
);
const FaCoaches = () => (
    <section>
        <header>
            <h2>Free Agents: Coaches</h2>
        </header>
    </section>
);


export default Menu;