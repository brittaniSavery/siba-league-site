import React from 'react';
import { Navbar } from 'react-bootstrap';
import * as copyRange from 'rainge'

const Footer = () => (
    <Navbar fixedBottom={true}>
        <Navbar.Text pullRight>
            &copy; {copyRange(2018)} Avery Incorporated<br />
            Vectors by <a target="_blank" rel="noopener noreferrer" href="https://www.vecteezy.com/">Vecteezy.com</a>
        </Navbar.Text>
    </Navbar>
);

export default Footer;