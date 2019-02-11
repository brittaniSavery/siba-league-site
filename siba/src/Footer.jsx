import React from 'react';
import { Navbar } from 'react-bootstrap';
import * as copyRange from 'rainge'

const Footer = () => (
    <Navbar fixedBottom={true}>
        <Navbar.Text pullRight>
            &copy; {copyRange(2018)} Avery Incorporated<br />
            Icons/Vectors by <a href="https://icons8.com/material-icons" target="_blank" rel="noopener noreferrer">Icons8</a> & <a target="_blank" rel="noopener noreferrer" href="https://www.vecteezy.com/">Vecteezy.com</a>
        </Navbar.Text>
    </Navbar>
);

export default Footer;