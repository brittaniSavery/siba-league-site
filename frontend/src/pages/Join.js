import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import InputField from "../components/InputField";
import Content from "../layout/Content";
import { ERROR, SENDING, SENT } from "../lib/constants";
import AddTeamModal from "../components/AddTeam";

export default function Join() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    teams: {},
    foundBy: "",
    reason: "",
  });
  const [emailStatus, setEmailStatus] = React.useState("");
  const [openPro, setOpenPro] = React.useState(false);
  const [openCollege, setOpenCollege] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailStatus(SENDING);

    const response = await fetch(process.env.REACT_APP_JOIN_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const message = await response.json();
      console.log(`Email sent! ${message}`);
      setEmailStatus(SENT);
      setFormData({
        name: "",
        email: "",
        teams: {},
        foundBy: "",
        reason: "",
      });
    } else {
      setEmailStatus(ERROR);
    }
  };

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleClose = () => {
    setEmailStatus("");
  };

  const handleProTeam = (team) => {
    const teams = formData.teams;
    teams.pro = team;

    setFormData({ ...formData, teams: teams });
    setOpenPro(false);
  };

  const handleCollegeTeam = (team) => {
    const teams = formData.teams?.college || [];
    teams.push(team);

    setFormData({ ...formData, teams: { ...formData.teams, college: teams } });
    setOpenCollege(false);
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

      <form onSubmit={(e) => handleSubmit(e)}>
        <InputField
          id="name"
          label="Name:"
          value={formData.name}
          onChange={(e) => handleOnChange(e)}
          required
        />

        <InputField
          id="email"
          type="email"
          label="Email:"
          value={formData.email}
          onChange={(e) => handleOnChange(e)}
          required
        />

        <InputField
          id="foundBy"
          as="select"
          label="Found SIBA From:"
          value={formData.foundBy}
          onChange={(e) => handleOnChange(e)}
          required
        >
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
          value={formData.reason}
          onChange={(e) => handleOnChange(e)}
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
              {!formData?.teams?.pro?.name && (
                <>
                  <Button variant="secondary" onClick={() => setOpenPro(true)}>
                    Add Professional Team
                  </Button>
                  <AddTeamModal
                    open={openPro}
                    onClose={handleProTeam}
                    type="pro"
                  />
                </>
              )}
            </Tab>
            <Tab eventKey="college" title="SICBA (college)">
              <p>
                Remember that you can coach up to three (3) teams. They each
                must be in different tiers and different recruiting regions.
              </p>
              {(!formData?.teams?.college ||
                formData?.teams?.college?.length < 3) && (
                <>
                  <Button
                    variant="secondary"
                    onClick={() => setOpenCollege(true)}
                  >
                    Add College Team
                  </Button>
                  <AddTeamModal
                    open={openCollege}
                    onClose={handleCollegeTeam}
                    type="college"
                  />
                </>
              )}
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
      </form>

      <Modal show={emailStatus === SENT || emailStatus === ERROR}>
        <Modal.Header>
          <Modal.Title>
            {emailStatus === SENT ? "Thank you!" : "Oops!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {emailStatus === SENT ? (
            <p>
              We greatly appreciate your interest in the Simulation
              International Basketball Association (SIBA). A confirmation email
              from siba@averyincorporated.com has just been sent to you. Be sure
              to check your junk/spam folder!
            </p>
          ) : (
            <p>An error occurred. Maybe try again?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Content>
  );
}
