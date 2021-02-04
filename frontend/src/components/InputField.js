import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function InputField({
  id,
  label,
  help,
  validation,
  column,
  horizontal,
  short,
  ...props
}) {
  const FormGroup = ({ children }) => (
    <Form.Group as={horizontal && Row} controlId={id}>
      {children}
    </Form.Group>
  );
  const LabelComponent = () => (
    <Form.Label column={horizontal}>{label}</Form.Label>
  );
  const FieldComponent = () => (
    <>
      <Form.Control
        aria-describedby={`${id}-helpText`}
        className={short && "is-short-width"}
        {...props}
      />
      {help && (
        <Form.Text id={`${id}-helpText`} muted>
          {help}
        </Form.Text>
      )}
    </>
  );

  return (
    <>
      {horizontal ? (
        <FormGroup>
          <LabelComponent />
          <Col>
            <FieldComponent />
          </Col>
        </FormGroup>
      ) : column ? (
        <Col xs={12} md={6}>
          <FormGroup>
            <LabelComponent />
            <FieldComponent />
          </FormGroup>
        </Col>
      ) : (
        <FormGroup>
          <LabelComponent />
          <FieldComponent />
        </FormGroup>
      )}
    </>
  );
}
