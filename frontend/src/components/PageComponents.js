import React from "react";
import { Media } from "react-bootstrap";

const BasicHeader = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

const SubHeader = ({ title, children }) => (
  <section>
    <h4>{title}</h4>
    {children}
  </section>
);

const Content = ({ header, children }) => (
  <section className="container">
    <BasicHeader title={header} />
    {children}
  </section>
);

const CommingSoon = ({ header }) => (
  <Content header={header}>
    <h4>Coming soon!</h4>
  </Content>
);

const OwnerBio = ({ team, name, logo, alt }) => (
  <Media>
    <Media.Left>
      <img src={logo} alt={alt} />
    </Media.Left>
    <Media.Body>
      <Media.Heading>{team}</Media.Heading>
      <p>{name}</p>
    </Media.Body>
  </Media>
);

export { BasicHeader, SubHeader, CommingSoon, OwnerBio, Content };
