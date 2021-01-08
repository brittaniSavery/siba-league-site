import React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoBlank from "../images/logo-blank.svg";
import collegeLogo from "../images/sicba-logo-blank.svg";

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
      { title: "Downloads", link: "/donwloads" },
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
  <Navbar fixedTop id="custom-nav-bar">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <span>
            <img src={logoBlank} alt="SIBA Logo" />
            &nbsp;SIBA
          </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <MenuOption index={1} nav={nav.about} />
        <DropDownMenu index={2} nav={nav.siba} />
        <DropDownMenu index={3} nav={nav.college} />
        <DropDownMenu index={4} nav={nav.dbl} />
        <MenuOption index={5} nav={nav.upload} />
        <MenuOption index={6} nav={nav.join} />
      </Nav>
      <Navbar.Text pullRight>
        Associated Leagues:&nbsp;
        <img src={collegeLogo} className="nav-img" alt="SICBA Logo" />
        SICBA
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

const MenuOption = ({ nav, index }) => (
  <NavItem eventKey={index} href={nav.link}>
    {nav.title}
  </NavItem>
);

const DropDownMenu = ({ nav, index }) => (
  <NavDropdown eventKey={index} title={nav.title} id={nav.title.toLowerCase()}>
    {nav.sublinks.map((sublink, subindex) => (
      <MenuItem
        key={nav.title + " " + sublink.link}
        eventKey={`${index}.${subindex + 1}`}
        href={`${nav.link}${sublink.link}`}
      >
        {sublink.title}
      </MenuItem>
    ))}
  </NavDropdown>
);

export default Menu;
