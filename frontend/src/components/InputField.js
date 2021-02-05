import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function InputField({
  id,
  label,
  help,
  error,
  validation,
  column,
  horizontal,
  short,
  ...props
}) {
  return (
    <>
      {horizontal ? (
        <FormGroup horizontal controlId={id}>
          <FormLabel horizontal label={label} />
          <Col>
            <FormInput
              controlId={id}
              short={short}
              help={help}
              error={error}
              {...props}
            />
          </Col>
        </FormGroup>
      ) : column ? (
        <Col xs={12} md={6}>
          <FormGroup controlId={id}>
            <FormLabel label={label} />
            <FormInput
              controlId={id}
              short={short}
              help={help}
              error={error}
              {...props}
            />
          </FormGroup>
        </Col>
      ) : (
        <FormGroup controlId={id}>
          <FormLabel label={label} />
          <FormInput
            controlId={id}
            short={short}
            help={help}
            error={error}
            {...props}
          />
        </FormGroup>
      )}
    </>
  );
}

function FormGroup({ children, horizontal, controlId }) {
  return (
    <Form.Group as={horizontal && Row} controlId={controlId}>
      {children}
    </Form.Group>
  );
}

function FormLabel({ horizontal, label }) {
  return <Form.Label column={horizontal}>{label}</Form.Label>;
}

function FormInput({ controlId, help, error, short, ...rest }) {
  const errorMessage = error
    ? error
    : rest.required && "This field is required.";

  return (
    <>
      <Form.Control
        aria-describedby={`${controlId}-helpText`}
        className={short && "is-short-width"}
        name={controlId}
        {...rest}
      />
      {help && (
        <Form.Text id={`${controlId}-helpText`} muted>
          {help}
        </Form.Text>
      )}
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </>
  );
}
