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
            <Route path="/info/about" component={About} />
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

const About = () => (
    <section>
        <header>
            <h2>About</h2>
        </header>

        <section>
            <h4>The SIBA</h4>
            <p>
                The Simulation International Basketball Assoication (SIBA for short) was the combined efforts of
                Kelley and Brittani Avery, a father and daughter team. Sharing a love of basketball and statistics,
                they worked together to create the league as a way to spend quality time together. Kelley
                created the teams, logos, and rules of the league while Brittani provided her technical expertise
                to build the website and other important tools to support it.
            </p>
        </section>

        <section>
            <h4>Kelley Avery</h4>
            <p>Basketball has always been a majority portion of Kelly's life. He played the game throughout his childhood and in his high school years
                and shared the love of the game with fifth and sixth grades when he coached little league. However, he has always been a family man at heart 
                and his favorite hobby is spending time with his wife and children.
            </p>
            <p>Fun Facts:</p>
            <ul>
                <li>Dream Job as Kid: Pro Basketball Player</li>
                <li>Favorite Color: Blue</li>
                <li>Favorite Animal: Polar Bear</li>
                <li>Favorite Food: Any Chinese Dish</li>
            </ul>
        </section>

        <section>
            <h4>Brittani Avery</h4>
            <p>
                When not leading her fictional basketball team, Brittani enjoys a variety of hobbies, such as reading,
                writing, and playing video games. Recently, her hobby of writing has turned into a venture with the 
                publication of her first novel, <i><a href="http://amzn.to/2vSpcxR">Element Unknown</a></i>.
            </p>
            <p>Fun Facts:</p>
            <ul>
                <li>Dream Job as Kid: Veterinarian</li>
                <li>Favorite Color: Blackish purple</li>
                <li>Favorite Animal: Black Panther</li>
                <li>Favorite Food: Shrimp Etouffee</li>
            </ul>
        </section>
    </section>
);
const Owners = () => (
    <section>
        <header>
            <h2>SIBA Owners</h2>
        </header>

        <h4>Coming soon!</h4>
    </section>
);

const Rules = () => (
    <section>
        <header>
            <h2>Rules</h2>
        </header>

        <section>
            <header>
                <h4>League Setup</h4>
            </header>
            <ul>
                <li>Salary Cap: $68,680,000</li>
                <li>Luxury Cap: $81,150,000</li>
                <li>Rating Scale: 1-100 Point</li>
            </ul>
        </section>

        <section>
            <header>
                <h4>Defintions</h4>
            </header>
            <ul>
                <li>
                    <span>Bird Rights</span>
                    <p>The Larry Bird exception allows a team over the salary cap to re-sign their 
                        free agent provided the player has not been waived or changed teams as a 
                        free agent in 3 years. Bird Rights allow for 6 year contracts. Other teams
                        competing for a player in free agency may only offer a maximum 5 year length
                        contract. Bird Rights allow for maximum salary contracts with 10.5% raises each year. 
                        Bird Rights can be traded with a player, as was the case with Rasheed Wallace. 
                        Consequently Bird Rights were not available for Mehmet Okur as he was originally
                        signed only to a 2 year contract as a second round draft pick.</p>
                </li>
                <li>
                    <span>Raises</span>
                    <p>All raises are calculated as a % of the first year of a contract. For instance, 
                        a 4 year contract starting at $10 million dollars with 8% raises would be $10
                        million in year 1, $10.8 million in year 2, $11.6 million in year 3 and $12.4
                        million in year 4. $800,000 per year.</p>
                </li>
                <li>
                    <span>Renoucing Players</span>
                    <p>When a player becomes a free agent, because of the bird rule, he is automatically
                        assigned a contract raise that counts on your books until a) you resign him b) 
                        you renounce him or c) he signs with someone else. The reason for this is that lets
                        say you have a star player who is a free agent - without his contract maybe you
                        are 10 million under the cap. If he didn't have a cap number assigned to you while
                        you had his bird rights then you could go out and sign a big time FA for 10 million
                        and then go over the cap to resign your own guy. So in order to prevent this your
                        FA is assigned a temporary salary basically. By renouncing his contract that salary
                        will be taken off the books BUT you also lose all bird rights to the player meaning
                        from that point on you could resign him but only to the amount of cap space you have left.</p>
                </li>
                
            </ul>
        </section>
    </section>
);

const Rewards = () => (
    <section>
        <header>
            <h2>Rewards</h2>
        </header>

        <h4>Coming soon!</h4>
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

        <h4>Coming soon!</h4>
    </section>
);
const DblLeaders = () => (
    <section>
        <header>
            <h2>DBL Leaders</h2>
        </header>

        <h4>Coming soon!</h4>
    </section>
);
const SibaLeaders = () => (
    <section>
        <header>
            <h2>SIBA Leaders</h2>
        </header>

        <h4>Coming soon!</h4>
    </section>
);

const SibaStandings = () => (
    <section>
        <header>
            <h2>SIBA Standings</h2>
        </header>

        <h4>Coming soon!</h4>
    </section>
);
const Transactions = () => (
    <section>
        <header>
            <h2>Transactions</h2>
        </header>

        <h4>Coming soon!</h4>
    </section>
);
const FaPlayers = () => (
    <section>
        <header>
            <h2>Free Agents: Players</h2>
        </header>
        
        <h4>Coming soon!</h4>
    </section>
);
const FaCoaches = () => (
    <section>
        <header>
            <h2>Free Agents: Coaches</h2>
        </header>

        <h4>Coming soon!</h4>
    </section>
);


export default Menu;