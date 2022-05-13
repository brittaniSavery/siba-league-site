import { Container, Navbar } from "react-bootstrap";

const currentYear = new Date().getFullYear();
const copyright = `2018–${currentYear}`;

const Footer = () => (
  <Navbar bg="light">
    <Container>
      <Navbar.Text>
        Find us on social media!
        <a
          href="https://twitter.com/SIBA_AveryINC"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="nav-img"
            src={`${process.env.REACT_APP_URL}/images/Twitter_Logo_Blue.svg`}
            alt="Follow us on Twitter!"
          />
        </a>
        <a
          href="https://join.slack.com/t/sibabball/shared_invite/zt-grkrrq9i-je57xB2Y7NGoPTh0GlKNNg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="nav-img"
            src={`${process.env.REACT_APP_URL}/images/Slack_Mark.svg`}
            alt="Join us on Slack!"
          />
        </a>
      </Navbar.Text>
      <Navbar.Text className="small justify-content-end">
        &copy; {copyright} Avery Incorporated
      </Navbar.Text>
    </Container>
  </Navbar>
);

export default Footer;
