import React from "react";
import { Button } from "react-bootstrap";
import { FieldGroup, BasicHeader } from "./Utilities.js";

class Upload extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      league: "",
      team: "",
      selectedFile: ""
    };
  }

  handleOnChange = event => {
    let id = event.target.id;
    this.setState({ [id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <section className="container">
        <BasicHeader title="Upload" />

        <p>
          Please specify a valid DDSPB team save file, league password, and
          unique team password.
        </p>

        <form onSubmit={e => this.handleSubmit(e)}>
          <FieldGroup
            id="league"
            type="password"
            label="League Password:"
            value={this.state.league}
            onChange={e => this.handleOnChange(e)}
            required
          />

          <FieldGroup
            id="team"
            type="password"
            label="Team Password:"
            value={this.state.team}
            onChange={e => this.handleOnChange(e)}
            required
          />

          <FieldGroup
            id="selectedFile"
            type="file"
            label="DDSPB File:"
            value={this.state.selectedFile}
            onChange={e => this.handleOnChange(e)}
            required
          />

          <Button type="submit">Submit</Button>
        </form>
      </section>
    );
  }
}

export default Upload;
