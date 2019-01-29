import React from 'react';
import { FieldGroup, BasicHeader } from './Utilities.js';
import { Button } from 'react-bootstrap';
import './App.css';

const Upload = () => (
    <section className="container">
        <BasicHeader title="Upload" />

        <p>Using the form below, select a valid DDSPB team save file and enter the league password and your team's password.</p>

        <form>
            <FieldGroup
                id="teamSaveFile"
                type="file"
                label="Select Your Team File:"
            />

            <FieldGroup 
                id="leaguePassword"
                label="League Password:"
                type="password"
            />
            
            <FieldGroup 
                id="teamPassword"
                label="Team Password:"
                type="password"
            />

            <Button type="submit">Upload</Button>
        </form>

    </section>
);

export default Upload;