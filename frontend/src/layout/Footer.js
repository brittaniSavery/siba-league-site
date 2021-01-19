import React from "react";
import { Navbar } from "react-bootstrap";

const currentYear = new Date().getFullYear();
const copyright = `2018–${currentYear}`;

const Footer = () => (
  <Navbar bg="light" className="justify-content-end">
    <Navbar.Text>&copy; {copyright} Avery Incorporated</Navbar.Text>
  </Navbar>
);

export default Footer;
