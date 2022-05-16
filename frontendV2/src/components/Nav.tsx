import clsx from "clsx";
import { useState } from "react";

const navItems = [
  { title: "About", link: "/about", dropdown: false },
  {
    title: "SIBA Info",
    link: "/siba",
    dropdown: true,
    sublinks: [
      { title: "Rules", link: "/rules" },
      { title: "Owners", link: "/owners" },
      { title: "Rewards", link: "/rewards" },
      { title: "Downloads", link: "/downloads" },
    ],
  },
  {
    title: "SIBA Season",
    link: "/siba",
    dropdown: true,
    sublinks: [
      { title: "League Standings", link: "/standings" },
      { title: "League Leaders", link: "/leaders" },
      { title: "Schedule", link: "/schedule" },
      { title: "Transactions", link: "/transactions" },
      { title: "Free Agents", link: "/free-agents" },
      { title: "Available Coaches", link: "/available-coaches" },
      { title: "Player Index", link: "/player-index" },
    ],
  },
  {
    title: "College",
    link: "/college",
    dropdown: true,
    sublinks: [
      { title: "Rules", link: "/rules" },
      { title: "League Standings", link: "/standings" },
      { title: "Pre-season Tier Rankings", link: "/rankings" },
      { title: "Head Coaches", link: "/coaches" },
      { title: "Downloads", link: "/downloads" },
    ],
  },
  {
    title: "DBL",
    link: "/dbl",
    dropdown: true,
    sublinks: [
      { title: "League Standings", link: "/standings" },
      { title: "League Leaders", link: "/leaders" },
    ],
  },
  {
    title: "News",
    link: "/news",
    dropdown: true,
    sublinks: [
      { title: "Pro Headlines", link: "/headlines" },
      { title: "Articles", link: "/articles" },
    ],
  },
  { title: "Join", link: "/join", dropdown: false },
];

export default function Nav() {
  const [isMenuActive, setMenuActive] = useState(false);
  return (
    <nav
      className="navbar is-fixed-top is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <section className="container is-max-desktop">
        <div className="navbar-brand">
          <a className="navbar-item" href={import.meta.env.BASE_URL}>
            <img src="/logo-blank.svg" alt="" style={{ width: "5vh" }} />
            <span className="has-text-weight-bold has-text-primary ml-2 is-size-3-touch is-size-2">
              SIBA
            </span>
          </a>
          <a
            role="button"
            className={clsx("navbar-burger burger", {
              "is-active": isMenuActive,
            })}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setMenuActive(!isMenuActive)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          id="navigation-menu"
          className={`navbar-menu${isMenuActive ? " is-active" : ""}`}
        >
          {navItems.map((i) => {
            if (i.dropdown)
              return (
                <NavDropdown
                  key={i.title}
                  title={i.title}
                  link={i.link}
                  sublinks={i.sublinks}
                />
              );
            else return <NavLink key={i.title} title={i.title} link={i.link} />;
          })}
        </div>
      </section>
    </nav>
  );
}

type NavLinkProps = {
  link: string;
  title: string;
};

type DropDownProps = NavLinkProps & {
  sublinks: NavLinkProps[];
};

function NavLink({ link, title }: NavLinkProps) {
  return (
    <a className="navbar-item" href={link}>
      {title}
    </a>
  );
}

function NavDropdown({ link, title, sublinks }: DropDownProps) {
  const [isActive, setActive] = useState(false);
  return (
    <div
      className="navbar-item has-dropdown is-hoverable"
      onClick={() => setActive(!isActive)}
    >
      <a className="navbar-link">{title}</a>
      <div
        className={clsx("navbar-dropdown", {
          "is-hidden-touch": !isActive,
          "is-active": isActive,
        })}
      >
        {sublinks.map((l) => (
          <a
            key={`${title}-${l.title}`}
            className="navbar-item"
            href={`${link}${l.link}`}
          >
            {l.title}
          </a>
        ))}
      </div>
    </div>
  );
}
