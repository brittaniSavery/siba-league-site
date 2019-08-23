import React from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

const BasicHeader = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

const SubHeader = ({ title, children }) => (
  <section>
    <h4>{title}</h4>
    {children}
  </section>
);

const CommingSoon = ({ header }) => (
  <section className="container">
    <BasicHeader title={header} />
    <h4>Coming soon!</h4>
  </section>
);

const FieldGroup = ({ id, label, help, ...props }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

export { FieldGroup, BasicHeader, SubHeader, CommingSoon };
