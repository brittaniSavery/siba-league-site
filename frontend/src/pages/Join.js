import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddTeamModal from "../components/AddTeam";
import InputField from "../components/InputField";
import Content from "../layout/Content";
import { ERROR, SENDING, SENT } from "../lib/constants";

export default function Join() {
  const [teams, setTeams] = React.useState([]);
  const [emailStatus, setEmailStatus] = React.useState();
  const [openPro, setOpenPro] = React.useState(false);
  const [openCollege, setOpenCollege] = React.useState(false);

  //TODO: Change to include user info and team info
  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailStatus(SENDING);

    const response = await fetch(process.env.REACT_APP_JOIN_URL, {
      method: "POST",
      body: JSON.stringify(teams),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const message = await response.json();
      console.log(`Email sent! ${message}`);
      setEmailStatus(SENT);
      setTeams({});
    } else {
      setEmailStatus(ERROR);
    }
  };

  const handleAddTeam = (team) => {
    console.log(team);
    setTeams([...teams, team]);
    team.type === "pro" ? setOpenPro(false) : setOpenCollege(false);
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

      <Form onSubmit={(e) => handleSubmit(e)}>
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

        <div className="form-group">
          <Tabs defaultActiveKey="pro" id="teams-container">
            <Tab eventKey="pro" title="SIBA (pro)">
              <p>
                If you're an artist and would like to create a new logo for your
                team, be sure to let the commissioners when joining our
                community on{" "}
                <a
                  href="https://join.slack.com/t/sibabball/shared_invite/zt-grkrrq9i-je57xB2Y7NGoPTh0GlKNNg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Slack
                </a>
                . We love creativity!
              </p>
              <Button
                variant="secondary"
                disabled={!teams.includes((team) => team.type === "pro")}
                onClick={() => setOpenPro(true)}
              >
                Add Professional Team
              </Button>
              <AddTeamModal open={openPro} onClose={handleAddTeam} type="pro" />
            </Tab>
            <Tab eventKey="college" title="SICBA (college)">
              <p>
                Remember that you can coach up to three (3) teams. They each
                must be in different tiers and different recruiting regions.
              </p>

              <Button
                variant="secondary"
                disabled={teams.filter((team) => team.type === "college") > 3}
                onClick={() => setOpenCollege(true)}
              >
                Add College Team
              </Button>
              <AddTeamModal
                open={openCollege}
                onClose={handleAddTeam}
                type="college"
              />
            </Tab>
          </Tabs>
        </div>

        <Button
          type="submit"
          variant="primary"
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
