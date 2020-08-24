import React from "react";
import { Navbar } from "react-bootstrap";
import * as copyRange from "rainge";

const Footer = () => (
  <Navbar fixedBottom={true}>
    <Navbar.Text pullRight>
      &copy; {copyRange(2018)} Avery Incorporated
    </Navbar.Text>
  </Navbar>
);

export default Footer;
