import React from 'react';
import { FieldGroup, BasicHeader } from './Utilities.js';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './App.css';

const Join = () => (
    <section className="container">
        <BasicHeader title="Join" />
        <p>Intersting in joining the SIBA as the general manager of your own basketball team? Fill out the form below and the commissioner
            will contact you with more information on the available teams and other important steps.
        </p>

        <form>
            <FieldGroup
                id="name"
                type="text"
                label="Name:"
            />

            <FieldGroup 
                id="email"
                type="email"
                label="Email:"
            />

            <FormGroup controlId="formControlsSelect">
            <ControlLabel>Found SIBA by:</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
                <option value="referral">Friend/Family</option>
                <option value="google">Google</option>
                <option value="fb">Facebook</option>
                <option value="twitter">Twitter</option>
                <option value="other">Other</option>
            </FormControl>
            </FormGroup>

            <FormGroup controlId="join-reason">
                <ControlLabel>Reason for Joining:</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Optional" />
            </FormGroup>

            <Button type="submit">Submit</Button>
        </form>

    </section>
);

export default Join;