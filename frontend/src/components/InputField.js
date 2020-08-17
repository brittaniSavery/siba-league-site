import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from "react-bootstrap";

export default function InputField({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
