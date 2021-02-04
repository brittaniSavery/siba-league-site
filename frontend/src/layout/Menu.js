import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoBlank from "../images/logo-blank.svg";
import collegeLogo from "../images/sicba-logo-blank.svg";
import developmentLogo from "../images/development-logo.gif";

const nav = {
  about: {
    title: "About",
    link: "/about",
  },
  siba: {
    title: "SIBA",
    link: "/siba",
    sublinks: [
      { title: "Rules", link: "/rules" },
      { title: "League Standings", link: "/standings" },
      { title: "League Leaders", link: "/leaders" },
      { title: "Schedule", link: "/schedule" },
      { title: "Transactions", link: "/transactions" },
      { title: "Free Agents", link: "/free-agents" },
      { title: "Available Coaches", link: "/available-coaches" },
      { title: "Owners", link: "/owners" },
      { title: "Rewards", link: "/rewards" },
      { title: "Downloads", link: "/downloads" },
    ],
  },
  college: {
    title: "College",
    link: "/college",
    sublinks: [
      { title: "Rules", link: "/rules" },
      { title: "League Standings", link: "/standings" },
      { title: "Pre-season Tier Rankings", link: "/rankings" },
      { title: "Head Coaches", link: "/coaches" },
      { title: "Downloads", link: "/downloads" },
    ],
  },
  dbl: {
    title: "DBL",
    link: "/dbl",
    sublinks: [
      { title: "League Standings", link: "/standings" },
      { title: "League Leaders", link: "/leaders" },
    ],
  },
  upload: {
    title: "Upload",
    link: "/upload",
  },
  join: {
    title: "Join",
    link: "/join",
  },
};

const Menu = () => (
  <Navbar fixed="top" bg="light" expand="lg">
    <Container>
      <Navbar.Brand
        href="/"
        className="d-flex align-items-center text-decoration-none"
      >
        <img
          src={logoBlank}
          className="nav-img d-inline-block align-top"
          alt=""
        />
        <span className="font-weight-bold text-primary pl-2">SIBA</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="siba-navbar-nav" />
      <Navbar.Collapse id="siba-navbar-nav" className="justify-content-between">
        <Nav className="ml-2">
          <Nav.Link href={nav.about.link}>{nav.about.title}</Nav.Link>
          <DropDownMenu nav={nav.siba} />
          <DropDownMenu nav={nav.college} />
          <DropDownMenu nav={nav.dbl} />
          <Nav.Link href={nav.upload.link}>{nav.upload.title}</Nav.Link>
          <Nav.Link href={nav.join.link}>{nav.join.title}</Nav.Link>
        </Nav>
        <Navbar.Text>
          <span className="d-block">Associated Leagues:&nbsp;</span>
          <img
            src={collegeLogo}
            className="nav-img d-inline-block align-middle"
            alt="SICBA"
          />
          <img
            src={developmentLogo}
            className="nav-img d-inline-block align-middle"
            alt="DBL"
          />
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const DropDownMenu = ({ nav }) => (
  <NavDropdown title={nav.title} id={nav.title.toLowerCase()}>
    {nav.sublinks.map((sublink) => (
      <NavDropdown.Item
        key={nav.title + " " + sublink.link}
        href={nav.link + sublink.link}
      >
        {sublink.title}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
);

export default Menu;
