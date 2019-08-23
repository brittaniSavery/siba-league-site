import React from "react";
import { BasicHeader, SubHeader } from "./Utilities";
import scheduleIMG from "./images/schedule.png";

const Rules = () => (
  <section className="container">
    <BasicHeader title="Rules" />

    <SubHeader title="Game League Schedule">
      <p>
        Sims Time will be Monday, Wednesday, and Friday at 9:00 PM (CST)
        <br />
        <br />
        Salary Cap: $99,093,000
        <br />
        Luxury Cap: $119,266,000
      </p>
    </SubHeader>

    <SubHeader title="League Structure">
      <ul>
        <li>Rating Scale: 1-100 Point</li>
        <li>Trade Restrictions: All trades can be Veto by the Commissioner.</li>
        <li>Enforced Consecutive Picks Rule—NO</li>
        <li>Enforced 30 Day No-Trade Rule—YES (In-Season)</li>
        <li>Allow Players enter into the SIBA from the SICBA</li>
        <li>Allow High School Draft Entry—NO</li>
        <li>Allow Foreign Draft Entry—YES</li>
        <li>Allow yourself to be fired—YES</li>
        <li>Allow yourself to be fired—NO</li>
        <li>Randomize Owner's Characteristics—YES</li>
      </ul>
    </SubHeader>

    <SubHeader title="User Control Setup">
      <p>
        Global Control-In this mode a user will only be hired to a team as a
        general manager but will have the ability to control the items for both
        GM and head coach.
      </p>
    </SubHeader>

    <SubHeader title="Calendar of Events">
      <p>
        DDSPB operates on a 365 day calendar, where applicable days are skipped
        to proceed between events. Below is a simple calendar of events for a
        single-season. Year selected is default.
      </p>
      <img src={scheduleIMG} alt="Schedule for the SIBA league" />
    </SubHeader>

    <SubHeader title="Multiplayer">
      <p>
        The GMs in the league will need to export their files using the fax
        machine on the office page (Export MP File). These should be imported
        prior to each of the following stages:
      </p>
      <ul>
        <li>Owner/GM phone calls</li>
        <li>Each day of coach hiring</li>
        <li>Pre-Draft WOrkouts</li>
        <li>Each Day of freee agency</li>
        <li>Training Camp</li>
        <li>D-League Assignments</li>
        <li>Any chance to Depth Chart, Sub Matrix, D-League Assignments</li>
        <li>Player instructions during the season</li>
      </ul>
      <p>
        These files need to be uploaded. All other stages of the season are
        handled by the Commissioner directly, and GMs should contact him via
        email or some other method to communicate their instructions.
      </p>
    </SubHeader>

    <SubHeader title="In Season Free Agent Signing">
      <p>
        In-Season is done by a team placing a post in the free agency thread
        which player they want. Then that player is there for 24 hours to give
        any other teams a chance of signing him. After the 24 hour period,
      </p>
      <p>
        Commissioner will use this program to calculate the number. (
        <a href="http://www.random.org/">True Random Number Generator</a>) Three
        random numbers will be average together to get the free agent number of
        interest.
      </p>
      <ol>
        <li>If only one team is involved, then that team signs him.</li>
        <li>
          If two teams are involved, then the first team has a 70% chance of
          signing him and the second team has only 30%. Example: team one has
          from (1-70) and team two has from (71-100)
        </li>
        <li>
          If three teams are involved, then the break down is team one gets 70%
          (1-70), team two get 20% (71-90), and team three get 10% (91-100)
        </li>
        <li>
          If four teams are involved, then the break down is team one gets 65%
          (1-65), team two gets 20% (66-85), team three gets 10% (86-95), and
          team four gets 5% (96-100)
        </li>
      </ol>
      <p>
        <b>
          Only four teams can claim a free agent. After the fourth team has
          claimed him, the claims are finalized. Only the first four teams will
          have the chance of signing him.
        </b>
      </p>
    </SubHeader>

    <SubHeader title="Definitions">
      <p>
        Here are a list of term definitions that will help GMs as they manage
        their teams.
      </p>
      <p>
        <b>SALARY CAP vs LUXURY CAP</b>
        <br />
        The salary cap acts as a “soft cap” meaning that it can be exceeded in
        certain situations (such as re-signing bird rights players or signing
        players to minimum contracts). The luxury cap is not so much a cap on
        anything but a threshold that once your salary crosses the team
        ownership gets penalized with paying extra taxes for doing so. This
        number is important because your ownership may allow you to spend over
        the salary cap but might want you to stay under this luxury cap number.
        Your amount under the luxury cap will also impact your ability to use
        the mid-level exception.
      </p>

      <p>
        <b>EXCEEDING THE SALARY CAP</b>
        <br /> As mentioned the salary cap is a “soft cap” and can be exceeded
        in some situations. You can always sign players to a minimum contract.
        If you have a restricted free agent who gets an offer you can exceed the
        cap to match that offer. You can also exceed the cap when using the
        low-level, mid-level or bird rights exceptions.
      </p>

      <p>
        <b>BIRD RIGHTS</b>
        <br /> Bird Rights are acquired by players when they finish the season
        on a team roster. If a player is released or changes teams via free
        agency his bird rights years are reset to zero but they do not reset if
        he is traded or resigns with his own team. Bird right years are
        important because they determine how much you can offer your player in
        free agency. This is an advantage for the team who has the player last
        because while all other teams need cap space or an exception to bid on
        the player the team holding his bird rights does not.
      </p>
      <p>
        Players with three or more bird years can receive any amount up to the
        league maximum contract for their number of years of experience in the
        league with 7.5% annual raises. Players with two bird years can be
        signed for up to 175% of the previous season’s contract amount assuming
        that does not exceed the league maximum for his experience level with
        7.5% annual raises. Players with just one bird year can be offered up to
        120% of their previous contract with 4.5% annual raises.
      </p>

      <p>
        <b>OTHER EXCEPTION</b>
        <br />
        You may also have the mid-level exception and low-level exceptions
        available to you in free agency. Teams over the luxury cap amount or far
        under the salary cap will not get these exceptions so keep that in mind
        during your contract planning.
      </p>

      <p>
        <b>RESTRICTED FREE AGENTS</b>
        <br />
        When a player finishes his full rookie contract (four years for first
        round picks, two years for second round picks) they have the ability to
        become restricted free agents. This means that you tender them a
        temporary contract and allow them to become a free agent. If they
        receive an offer in free agency they wish to accept you will get the
        chance to match that contract or lose the player with no compensation.
        If they do not find an offer they like they will have to sign with your
        team for one season for the temporary contract amount and then next
        season will become an unrestricted free agent. Keep this in mind when
        making an offer for another team’s RFA that if you’re not overpaying the
        team is probably likely to match the offer. Players do not become RFAs
        automatically. You have to go to your contracts page and make them a
        “qualifying offer” on or before the CONTRACTS action date in the game.
      </p>

      <p>
        <b>CAP HOLDS AND RENOUNCING RIGHTS</b>
        <br /> You may wonder why players who are now free agents are still
        counting against your salary cap. These are cap holds and any player who
        is a bird rights free agent has one that counts against your team -
        otherwise teams could use up all of their cap space and then try to
        resign their own bird rights free agents by going over the cap. If you
        want to have salary cap space to use then you will have to renounce the
        bird rights of your free agents. Do this on the CONTRACTS date in the
        game as well by going to your team contracts page and choosing the
        renounce option for players. This will free up the cap space but also
        take away the bird rights for the player.
      </p>

      <p>
        <b>EXTENSIONS</b>
        <br /> You can try to extend the contracts of your own players from your
        team contracts page as the season goes along but often times you will
        see that the player is asking for more money than you can offer in an
        extension. This is not a bug - it is what the player wants and often
        times it is more advantageous to the player to go to free agency even if
        he intends to resign with your team to be able to get the most money
        possible.
      </p>

      <p>
        <b>TWO-WAY CONTRACT</b> Two way contracts essentially allow you to have
        team control over two additional players who do not count against your
        15 man roster limit or your salary cap. When you sign a player to a two
        way contract he is placed on your development league affiliate on a two
        year contract. He remains there unable to be signed by another team
        until his contract runs out. You can call this player up at any time but
        doing so will remove the two way contract and replace it with a regular
        contract that does count against your salary.
      </p>
    </SubHeader>
  </section>
);

export default Rules;
