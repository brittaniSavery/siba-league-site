const PRO = "pro";
const COLLEGE = "college";

const PRO_ABILITY_POINTS = [
  { label: "Offensive Ability", id: "offensive" },
  { label: "Defensive Ability", id: "defensive" },
  { label: "Potential", id: "potential" },
  { label: "Game Strategy", id: "strategy" },
  { label: "Player Development", id: "development" },
];

const COLLEGE_ABILITY_POINTS = [
  { label: "Offensive Concepts", id: "offensive" },
  { label: "Defensive Concepts", id: "defensive" },
  { label: "Recruiting Skills", id: "recruiting" },
  { label: "Scouting Skills", id: "scouting" },
  { label: "Player Development", id: "development" },
];

const COLLEGE_COACH_PERSONALITY = [
  "Academics",
  "Ambition",
  "Discipline",
  "Integrity",
  "Temper",
];

exports.buildCommissionerEmail = ({ name, email, teams, foundBy, reason }) => {
  //throwing error if any important parameters are missing
  if (!(name && email && teams && foundBy)) {
    throw new Error(
      "Make sure to add your name, email, preferred league, team choices as well as how you found SIBA."
    );
  }

  const hasPro = teams.some((team) => team.type === PRO);
  const hasCollege = teams.some((team) => team.type === COLLEGE);

  const league = hasPro && hasCollege ? "both" : hasPro ? "pro" : "college";

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
          Data: `<p>Hello Commissioner!<br /></p>
          <p>Another person wants to join the league! Below is their information:</p>
            
          <p style="font-size: 2rem;">Basic Information</p>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Found SIBA from:</b> ${stringifyFoundBy(foundBy)}</p>
          ${reason && `<li><b>Reason for joining:</b> ${reason}</p>`}
          
          <p style="font-size: 2rem;">Team Information</p>
          ${stringifyTeams(teams)}

            <p>Thanks!<br />
            The Avery Incorporated IT Team</p>`,
        },
      },
    },
  };
};

exports.buildPlayerEmail = (name, email, teams) => {
  const leagueInSubject = () => {
    const hasPro = teams.some((team) => team.type === PRO);
    const hasCollege = teams.some((team) => team.type === COLLEGE);

    if (hasPro && hasCollege) {
      return "SIBA and its college league, SICBA";
    } else if (hasPro) {
      return "the Simulation International Basketball Association (SIBA)";
    } else {
      return "the Simulation International College Basketball Association (SICBA)";
    }
  };

  return {
    Source: process.env.COMMISSIONER,
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: `Thanks for joining ${leagueInSubject()}!`,
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<!DOCTYPE html>

          <head>
              <style>
                  body {
                      margin: 0;
                      padding: 0;
                      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                          sans-serif;
                      background-color: #3260a4;
                  }
          
                  .email-container {
                      margin: 2rem;
                  }
          
                  .main-container {
                      padding: 0.5rem 3rem;
                      border-radius: 0.5rem;
                      text-align: justify;
                      background-color: white;
                  }
          
                  .content ul li p:last-child {
                      margin-bottom: 1rem;
                  }
          
                  .content>p:last-child {
                      margin-bottom: 2rem;
                  }
          
                  code {
                      background-color: #e8f5ff;
                      color: #3260a4;
                  }
          
                  a,
                  a:hover,
                  a:active,
                  a:focus {
                      color: #3260a4;
                  }
          
                  .columns {
                      display: flex;
                      flex-direction: column;
                  }
          
                  .column {
                      width: 100%;
                  }
          
                  @media screen and (min-width: 1024px) {
                      .columns {
                          flex-direction: row;
                          justify-content: space-between;
                      }
          
                      .column {
                          width: 50%;
                      }
                  }
          
                  .coach-pic-face {
                      position: relative;
                      z-index: 0;
                  }
          
                  .coach-pic-outfit {
                      position: relative;
                      right: 102px;
                      z-index: 1;
                  }
          
                  .header {
                      width: 115px;
                      height: 60px;
                  }
          
                  .header img {
                      width: 100%;
                      height: 100%;
                  }
              </style>
          </head>
          
          <body>
              <div class="email-container">${name}</div></body></html>`,
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

function stringifyTeams(teams) {
  const teamItems = teams
    .map((team) => {
      const coachTitle = team.type === PRO ? "General Manager" : "Head Coach";
      let personality = "";
      let abilities = "";

      if (team.type === PRO) {
        personality += `<p><b>Personality</b>: ${team.coach.personality}</p>`;
        personality += `<p><b>Greed</b>: ${team.coach.greed}</p>`;

        abilities = PRO_ABILITY_POINTS.map(
          (skill) => `<p><b>${skill.label}:</b> ${team.coach[skill.id]}</p>`
        ).join("");
      } else {
        personality = COLLEGE_COACH_PERSONALITY.map(
          (trait) =>
            `<p><b>${trait}:</b> ${team.coach[trait.toLowerCase()]}</p>`
        ).join("");

        abilities = COLLEGE_ABILITY_POINTS.map(
          (skill) => `<p><b>${skill.label}:</b> ${team.coach[skill.id]}</p>`
        ).join("");
      }

      return `<li>
    <b>Name:</b> ${team.basics.name} (${team.type})
    <p><b>Password:</b> ${team.basics.password}<br /></p>
    <p style="font-size:1.25rem;"><i>${coachTitle}</i></p>
    <p><b>Name:</b> ${team.coach.first_name} ${team.coach.last_name}</p>
    <p><b>Pic #:</b> ${team.coach.pic}</p>
    <p><b>Outfit #:</b> ${team.coach.outfit}</p>
    ${personality}
    ${abilities}<br />
    </li>`;
    })
    .join("");

  return `<ol>${teamItems}</ol>`;
}
