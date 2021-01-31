import React from "react";
import { Button, Modal } from "react-bootstrap";
import InputField from "../components/InputField";
import Content from "../layout/Content";
import { ERROR, SENDING, SENT } from "../lib/constants";

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
          as="select"
          label="Preferred League:"
          value={formData.league}
          onChange={(e) => handleOnChange(e)}
          required
        >
          <option value=""></option>
          <option value="pro">Professional (SIBA)</option>
          <option value="college">College (SICBA)</option>
          <option value="both">Both</option>
        </InputField>

        <InputField
          id="teams"
          as="textarea"
          label="Team Choice(s):"
          value={formData.teams}
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

        <Button type="submit" disabled={emailStatus === SENDING}>
          Submit
        </Button>
        <span style={{ display: emailStatus !== SENDING ? "none" : null }}>
          Please Wait...
        </span>
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
              International Basketball Association (SIBA). An email from
              siba@averyincorporated.com has just been sent to you with further
              information on setting up your team(s). Be sure to check your
              junk/spam folder!
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

export default Join;
