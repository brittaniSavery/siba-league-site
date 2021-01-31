exports.buildCommissionerEmail = ({
  name,
  email,
  league,
  teams,
  foundBy,
  reason,
}) => {
  //throwing error if any important parameters are missing
  if (!(name && email && league && teams && foundBy)) {
    throw new Error(
      "Make sure to add your name, email, preferred league, team choices as well as how you found SIBA."
    );
  }

  return {
    Source: process.env.NO_REPLY,
    Destination: { ToAddresses: [process.env.COMMISSIONER] },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: `${name} wants to join ${
          league === "both" ? "both leagues" : `the ${league} league`
        }!`,
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<p>Another person wants to join the SIBA! Below is the information:</p>
            
            <ul>
              <li><b>Name:</b> ${name}</li>
              <li><b>Email: </b> ${email}</li>
              <li><b>Preferred League:</b> ${league}
              <li><b>Team Choice(s):</b> ${teams}
              <li><b>Found SIBA from:</b> ${stringifyFoundBy(foundBy)}</li>
              ${reason && `<li><b>Reason for joining:</b> ${reason}</li>`}
            </ul>
            
            <p>Thanks Commissioner!</p>
            
            <p>At your service,<br />
            The Avery Incorporated IT Team</p>`,
        },
      },
    },
  };
};

exports.buildPlayerEmail = (name, email, league, teams) => {
  const leagueInSubject = () => {
    switch (league) {
      case "pro":
        return "the Simulation International Basketball Association (SIBA)";
      case "pro":
        return "the Simulation International College Basketball Association (SICBA)";
      default:
        return "SIBA and its college league, SICBA";
    }
  };

  return {
    Source: process.env.COMMISSIONER,
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: `Thanks for joining ${leagueInSubject}!`,
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: ``,
        },
      },
    },
  };
};

function stringifyFoundBy(foundBy) {
  switch (foundBy) {
    case "developers":
      return "Wolverine Studios Forums";
    case "referral":
      return "Friend/Family";
    case "google":
      return "Google";
    case "fb":
      return "Facebook";
    case "twitter":
      return "Twitter";
    default:
      return "Something else";
  }
}
