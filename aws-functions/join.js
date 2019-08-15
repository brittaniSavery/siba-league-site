exports.buildEmail = (body) => {
  const { name, email, foundBy, site, reason } = JSON.parse(body);

  //throwing error if any important parameters are missing
  if (!(name && email && foundBy)) {
    throw new Error(
      "Make sure to add your name, email, and how you found SIBA."
    );
  }

  return {
    Source: process.env.SIBA_EMAIL,
    Destination: { ToAddresses: [process.env.COMMIS_EMAIL] },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: `${name} wants to join the ${site} league!`
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<p>Another person wants to join the SIBA! Below is the provided information:</p>
            
            <ul>
              <li><b>Name:</b> ${name}</li>
              <li><b>Email: </b> ${email}</li>
              <li><b>Found SIBA from:</b> ${stringifyFoundBy(foundBy)}</li>
              ${reason ? `<li><b>Reason for joining:</b> ${reason}</li>` : ""}
            </ul>
            
            <p>Thanks Comissioner!</p>
            
            <p>At your service,<br />
            The Avery Incorporated IT Team</p>`
        }
      }
    }
  };
}

function stringifyFoundBy(foundBy) {
  switch (foundBy) {
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
