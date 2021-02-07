import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import AddTeamModal from "../components/join/AddTeam";
import InputField from "../components/InputField";
import Content from "../layout/Content";
import { readString } from "react-papaparse";
import allCollegeTeamsFile from "../lib/sicba-rankings.csv";
import { ERROR, SENDING, SENT, PRO_TEAMS, PRO } from "../lib/constants";
import TeamSelectionCard from "../components/join/TeamSelectionCard";

export default function Join() {
  const [pageError, setPageError] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const [proTeams, setProTeams] = React.useState([]);
  const [collegeTeams, setCollegeTeams] = React.useState([]);
  const [selectedTeams, setSelectedTeams] = React.useState([]);
  const [emailStatus, setEmailStatus] = React.useState();
  const [openAddTeam, setOpenAddTeam] = React.useState(false);
  const [teamType, setTeamType] = React.useState(PRO);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        //get human (unavailable) teams
        const proHumanTeamsFetch = await fetch(
          `${process.env.REACT_APP_TEAMS_URL}?league=pro`
        );
        const collegeHumanTeamsFetch = await fetch(
          `${process.env.REACT_APP_TEAMS_URL}?league=college`
        );

        //parse college team file
        const fileResponse = await fetch(allCollegeTeamsFile);
        const file = await fileResponse.text();
        const parseResult = readString(file, {
          header: true,
          dynamicTyping: false,
          transformHeader: (header) => header.toLowerCase(),
        });

        //let the user know necessary data was not loaded correctly
        if (
          parseResult.errors.length ||
          !proHumanTeamsFetch.ok ||
          !collegeHumanTeamsFetch
        ) {
          console.log(parseResult.errors);
          console.log(await proHumanTeamsFetch.text());
          console.log(await collegeHumanTeamsFetch.text());
          setPageError(true);
        } else {
          //continue filtering out unavailable human teams
          const proHumanTeams = (await proHumanTeamsFetch.json()).map(
            (team) => team.name
          );
          const collegeHumanTeams = (await collegeHumanTeamsFetch.json()).map(
            (team) => team.name
          );
          const allCollegeTeams = parseResult.data.map((team) => ({
            tier: team.tier,
            name: `${team.school} ${team.nickname}`,
            region: team.region,
          }));

          setProTeams(
            PRO_TEAMS.filter((team) => !proHumanTeams.includes(team))
          );
          setCollegeTeams(
            allCollegeTeams.filter((team) =>
              collegeHumanTeams.every((hTeam) => hTeam !== team.name)
            )
          );
        }
      } catch (error) {
        setPageError(true);
      }
    };

    fetchData();
  }, []);

  //TODO: Change to include user info and team info
  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailStatus(SENDING);

    const response = await fetch(process.env.REACT_APP_JOIN_URL, {
      method: "POST",
      body: JSON.stringify(selectedTeams),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const message = await response.json();
      console.log(`Email sent! ${message}`);
      setEmailStatus(SENT);
      setSelectedTeams({});
    } else {
      setEmailStatus(ERROR);
    }
  };

  const handleOpenAddTeam = (type) => {
    setTeamType(type);
    setOpenAddTeam(true);
  };

  const handleAddTeam = (team) => {
    if (team) setSelectedTeams([...selectedTeams, team]);
    setOpenAddTeam(false);
  };

  return (
    <Content header="Join">
      <p>
        Interested in joining the SIBA as the general manager of your own
        professional basketball team or as the head coach of your own university
        basketball team? Fill out the form below, selecting your teams and
        coach, and the commissioner take your information and add you to our
        league.
      </p>

      {pageError && (
        <Alert variant="warning">
          <Alert.Heading>Teams Missing</Alert.Heading>
          <p>
            It looks like the available team choices have not loaded properly.
            Try refreshing the page to see if that fixes the problem.
          </p>
        </Alert>
      )}

      {emailStatus && (
        <Alert variant={emailStatus === SENT ? "success" : "danger"}>
          <Alert.Heading>
            {emailStatus === SENT ? "Thank you!" : "Oops!"}
          </Alert.Heading>
          {emailStatus === SENT && (
            <p>
              We greatly appreciate your interest in the Simulation
              International Basketball Association (SIBA). A confirmation email
              from siba@averyincorporated.com has just been sent to you. Be sure
              to check your junk/spam folder!
            </p>
          )}
          {emailStatus === ERROR && <p>An error occurred. Maybe try again?</p>}
        </Alert>
      )}

      <AddTeamModal
        open={openAddTeam}
        onClose={handleAddTeam}
        options={teamType === PRO ? proTeams : collegeTeams}
        type={teamType}
      />

      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <InputField id="name" label="Name:" required />

        <InputField
          id="email"
          type="email"
          label="Email:"
          error={"Please enter a valid email."}
          required
        />

        <InputField id="foundBy" as="select" label="Found SIBA From:" required>
          <option value=""></option>
          <option value="developers">Wolverine Studios Forums</option>
          <option value="referral">Friend/Family</option>
          <option value="google">Google</option>
          <option value="fb">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="other">Other</option>
        </InputField>

        <InputField
          id="reason"
          as="textarea"
          label="Reason for Joining:"
          placeholder="Optional"
        />

        <h2>Pick Your Teams</h2>
        <TeamSelectionCard teams={selectedTeams} onAdd={handleOpenAddTeam} />

        <Button
          type="submit"
          variant="primary"
          className="mt-3"
          disabled={emailStatus === SENDING}
        >
          {emailStatus === SENDING && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          {emailStatus === SENDING ? " Loading..." : "Submit"}
        </Button>
      </Form>
    </Content>
  );
}
