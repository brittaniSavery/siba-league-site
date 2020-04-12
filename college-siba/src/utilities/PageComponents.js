import React from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Media
} from "react-bootstrap";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const BasicHeader = props => (
  <header>
    <h1>{props.title}</h1>
  </header>
);

const CommingSoon = props => (
  <section className="container">
    <BasicHeader title={props.header} />
    <h4>Coming soon!</h4>
  </section>
);

const Content = ({ header, children }) => (
  <section className="container">
    <BasicHeader title={header} />
    {children}
  </section>
);

const generatedLocation = process.env.PUBLIC_URL + "/files/generated/";
const Division = ({ name, link, img }) => (
  <Media>
    <Media.Left>
      <img src={`${generatedLocation}images/${img}`} alt={`${name} Logo`} />
    </Media.Left>
    <Media.Body>
      <Media.Heading>{name}</Media.Heading>
      <a
        href={`${generatedLocation}${link}Standings.html`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Standings
      </a>
    </Media.Body>
  </Media>
);

export { FieldGroup, BasicHeader, CommingSoon, Content, Division };
