import React from "react";
import { Button, Modal, Glyphicon } from "react-bootstrap";
import { FieldGroup, BasicHeader } from "./Utilities.js";
import { UPLOAD_URL } from "./constants.js";

class Upload extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "",
      teamPass: "",
      teamFile: null,
      formSent: false,
      formSending: false,
      response: "",
      uploadOK: false
    };
  }

  handleOnChange = event => {
    let id = event.target.id;

    if (id === "teamFile") this.setState({ [id]: event.target.files[0] });
    else this.setState({ [id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ formSending: true });

    let formData = new FormData();
    formData.append("teamName", this.state.teamName);
    formData.append("teamPass", this.state.teamPass);
    formData.append("teamFile", this.state.teamFile);

    var url = UPLOAD_URL;
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(response => {
        if (!response.ok) throw Error(response.statusText);

        return response.json();
      })
      .then(json => {
        this.setState({ uploadOK: json.completed });

        if (json.completed) {
          this.setState({
            teamName: "",
            teamPass: "",
            teamFile: null,
            formSent: true,
            formSending: false,
            response: json.message
          });

          document.getElementById("teamFile").value = null;
        } else {
          this.setState({
            uploadOK: false,
            response: json.message,
            formSent: false,
            formSending: false
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          uploadOK: false,
          response: "There was an error uploading the file. Please try again.",
          formSent: false,
          formSending: false
        });
      });
  };

  handleClose = () => {
    this.setState({ formSent: false });
  };

  render() {
    return (
      <section className="container">
        <BasicHeader title="Upload" />

        <p>
          Please select your team and specify a valid DDSPB team save file and
          your unique team password.
        </p>

        <form onSubmit={e => this.handleSubmit(e)}>
          <FieldGroup
            id="teamName"
            type="text"
            label="Team:"
            value={this.state.teamName}
            onChange={e => this.handleOnChange(e)}
            disabled={this.state.formSending}
            required
          />

          <FieldGroup
            id="teamPass"
            type="password"
            label="Team Password:"
            value={this.state.teamPass}
            onChange={e => this.handleOnChange(e)}
            disabled={this.state.formSending}
            required
          />

          <FieldGroup
            id="teamFile"
            type="file"
            label="DDSPB File:"
            onChange={e => this.handleOnChange(e)}
            disabled={this.state.formSending}
            required
          />

          <Button type="submit" disabled={this.state.formSending}>
            {!this.state.formSending ? "Submit" : "Loading..."}
          </Button>
        </form>

        <Modal show={this.state.formSent}>
          <Modal.Header>
            <Modal.Title>
              {this.state.uploadOK ? "File upload sucessful!" : "ERROR!"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.response}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleClose()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

export default Upload;
