import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from "react-bootstrap";

export default function InputField({ id, label, help, validation, ...props }) {
  return (
    <FormGroup controlId={id} validationState={validation}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      <FormControl.Feedback />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
