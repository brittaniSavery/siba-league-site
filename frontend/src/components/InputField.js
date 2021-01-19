import React from "react";
import { Form } from "react-bootstrap";

export default function InputField({ id, label, help, validation, ...props }) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control aria-describedby={`${id}-helpText`} {...props} />
      {help && (
        <Form.Text id={`${id}-helpText`} muted>
          {help}
        </Form.Text>
      )}
    </Form.Group>
  );
}
