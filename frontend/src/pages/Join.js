import React from "react";
import InputField from "../components/InputField";
import { Button, Modal, Glyphicon } from "react-bootstrap";
import { ERROR, SENDING, SENT } from "../lib/constants";
import Content from "../layout/Content";

function Join() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    league: "",
    teams: "",
    foundBy: "",
    reason: "",
  });
  const [emailStatus, setEmailStatus] = React.useState("");

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
        league: "",
        teams: "",
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

  return (
    <Content header="Join">
      <p>
        Interested in joining the SIBA as the general manager of your own
        professional basketball team or as the head coach of your own university
        basketball team? Fill out the form below and the commissioner will
        contact you with more information on available teams and follow-up
        steps.
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
          id="league"
          label="Preferred League:"
          value={formData.league}
          onChange={(e) => handleOnChange(e)}
          componentClass="select"
          required
        >
          <option value=""></option>
          <option value="pro">Professional (SIBA)</option>
          <option value="college">College (SICBA)</option>
          <option value="both">Both</option>
        </InputField>

        <InputField
          id="teams"
          label="Team Choice(s):"
          value={formData.teams}
          onChange={(e) => handleOnChange(e)}
          componentClass="textarea"
          required
        />

        <InputField
          id="foundBy"
          label="Found SIBA By:"
          value={formData.foundBy}
          onChange={(e) => handleOnChange(e)}
          componentClass="select"
          required
        >
          <option value=""></option>
          <option value="referral">Friend/Family</option>
          <option value="google">Google</option>
          <option value="fb">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="other">Other</option>
        </InputField>

        <InputField
          id="reason"
          label="Reason for Joining:"
          value={formData.reason}
          onChange={(e) => handleOnChange(e)}
          componentClass="textarea"
          placeholder="Optional"
        />

        <Button type="submit" disabled={emailStatus === SENDING}>
          Submit
        </Button>
        <span style={{ display: emailStatus !== SENDING ? "none" : null }}>
          <Glyphicon glyph="hourglass" />
        </span>
      </form>

      <Modal show={emailStatus === SENT || emailStatus === ERROR}>
        <Modal.Header>
          <Modal.Title>
            {emailStatus === SENT ? "Thank you!" : "Uh oh!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {emailStatus === SENT ? (
            <p>
              We greatly appreciate your interest in the SIBA. An email has been
              sent to the commissioner and you should be hearing a response
              within a couple of days.
            </p>
          ) : (
            <p>
              Seems like an error occurred when trying to send the email to the
              commissioner. Maybe try again?
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Content>
  );
}

export default Join;
