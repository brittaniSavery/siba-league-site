import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const BasicHeader = (props) => (
    <header>
        <h1>{props.title}</h1>
    </header>
);

const CommingSoon = (props) => (
    <section className="container">
        <BasicHeader title={props.header} />
        <h4>Coming soon!</h4>
    </section>
);

export {FieldGroup, BasicHeader, CommingSoon}