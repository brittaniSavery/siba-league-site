import React from 'react';
import { Link } from 'react-router-dom';
import { BasicHeader, CommingSoon } from './Utilities.js';

export const About = () => (
    <section className="container">
        <BasicHeader title="About" />

        <h2>The SIBA</h2>
        <p>
            The Simulation International Basketball Assoication (SIBA for short) was the combined efforts of
            Kelley and Brittani Avery, a father and daughter team. Sharing a love of basketball and statistics,
            they worked together to create the league as a way to spend quality time together. Kelley
            created the teams, logos, and rules of the league while Brittani provided her technical expertise
            to build the website and other important tools to support it.
        </p>

        <h2>The Creators</h2>
        <h4>Kelley Avery</h4>
        <p>Basketball has always been a major portion of Kelly's life. He played the game throughout his childhood and in his high school years
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

        <h4>Brittani Avery</h4>
        <p>
            When not leading her fictional basketball team, Brittani enjoys a variety of hobbies, such as reading,
            writing, and playing video games. Recently, her hobby of writing has turned into a venture with the
            publication of her first novel, <i><a href="http://amzn.to/2vSpcxR">Element Unknown</a></i>.
        </p>
        <p>Fun Facts:</p>
        <ul>
            <li>Dream Job as Kid: Veterinarian</li>
            <li>Favorite Color: Deep purple</li>
            <li>Favorite Animal: Black Panther</li>
            <li>Favorite Food: Shrimp Etouffee</li>
        </ul>
    </section>
);

export const Rules = () => (
    <section className="container">
        <BasicHeader title="Rules" />

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

export const Home = () => (
    <section className="container">
        <header>
            <h1>Welcome</h1>
        </header>
        <p>The Simulation International Basketball Assoication (SIBA) is a fictional basketball simulation league using the Draft Day Sports: Pro Basketball program by Wolverine Studios. 30 teams and 30 GM all plan, recruit, trade, train, and play in order to take home the coveted prize of the SIBA Championship.
            Will you be king of the league? <Link to="/info/join">Join SIBA</Link> to claim your spot in the playoffs!
        </p>
        <h2>Updates</h2>
        <h4>February 10, 2019</h4>
        <p>The SIBA is officially open! Feel free to contact the commissioner with the <Link to="/info/join">Join</Link> form as well as check out the Rules to get a 
        better idea on how the league will work. Also, remember to purcahse your copy of <a href="https://www.wolverinestudios.com/draft-day-sports-pro-basketball-simulation/"><b>Draft Day Sports: Pro Basketball 2019</b></a>. 
        More information will come as GMs and teams are finalized.</p>
            
        <h4>January 22, 2019</h4>    
        <p>Things are slowly coming together to start the latest season of the SIBA. Keep on the lookout for more updates and information soon.</p>
    </section>
);

export const Owners = () => <CommingSoon header="SIBA Owners" />
export const Rewards = () => <CommingSoon header="Rewards" />
export const DblLeaders = () => <CommingSoon header="DBL Leaders" />
export const DblStandings = () => <CommingSoon header="DBL Standings" />
export const SibaLeaders = () => <CommingSoon header="SIBA Leaders" />
export const SibaStandings = () => <CommingSoon header="SIBA Standings" />
export const Transactions = () => <CommingSoon header="Transactions" />
export const FaCoaches = () => <CommingSoon header="Free Agents: Coaches" />
export const FaPlayers = () => <CommingSoon header="Free Agents: Players" />