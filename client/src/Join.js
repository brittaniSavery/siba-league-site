import React from 'react';
import { FieldGroup } from './Utilities.js';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './App.css';

const Join = () => (
    <section>
        <header>
            <h2>Join</h2>
        </header>

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

            <FormGroup controlId="join-reason">
                <ControlLabel>Reason for Joining:</ControlLabel>
                <FormControl componentClass="textarea" placeholder="" />
            </FormGroup>

            <Button type="submit">Submit</Button>
        </form>

    </section>
);

export default Join;