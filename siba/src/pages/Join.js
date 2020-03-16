import React from "react";
import { FieldGroup, BasicHeader } from "../Utilities.js";
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Modal,
  Glyphicon
} from "react-bootstrap";
import "../App.css";

class Join extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      foundBy: "",
      reason: "",
      site: "pro",
      emailSent: false,
      emailSending: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ emailSending: true });

    var url = process.env.REACT_APP_JOIN_URL;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(message => {
        console.log(`Email sent! ${message}`);
        this.setState({
          name: "",
          email: "",
          foundBy: "",
          reason: "",
          emailSent: true,
          emailSending: false
        });
      });
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleClose = () => {
    this.setState({ emailSent: false });
  };

  render() {
    return (
      <section className="container">
        <BasicHeader title="Join" />

        <p>
          Intersted in joining the SIBA as the general manager of your own
          basketball team? Fill out the form below and the commissioner will
          contact you with more information on available teams and follow-up
          steps.
        </p>

        <form onSubmit={e => this.handleSubmit(e)}>
          <FieldGroup
            id="name"
            type="text"
            label="Name:"
            value={this.state.name}
            onChange={e => this.handleOnChange(e)}
            required
          />

          <FieldGroup
            id="email"
            type="email"
            label="Email:"
            value={this.state.email}
            onChange={e => this.handleOnChange(e)}
            required
          />

          <FormGroup controlId="foundBy">
            <ControlLabel>Found SIBA by:</ControlLabel>
            <FormControl
              required
              value={this.state.foundBy}
              onChange={e => this.handleOnChange(e)}
              componentClass="select"
              placeholder="Choose one"
            >
              <option value="">Choose one</option>
              <option value="referral">Friend/Family</option>
              <option value="google">Google</option>
              <option value="fb">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="other">Other</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="reason">
            <ControlLabel>Reason for Joining:</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Optional"
              value={this.state.reason}
              onChange={e => this.handleOnChange(e)}
            />
          </FormGroup>

          <Button type="submit" disabled={this.state.emailSending}>
            Submit
          </Button>
          <span style={{ display: !this.state.emailSending ? "none" : null }}>
            <Glyphicon glyph="hourglass" />
          </span>
        </form>

        <Modal show={this.state.emailSent}>
          <Modal.Header>
            <Modal.Title>Thank you!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              We greatly appreciate your interst in the SIBA. An email has been
              sent to the commissioner and you should be hearing a response
              within a couple of days.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleClose()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

export default Join;
