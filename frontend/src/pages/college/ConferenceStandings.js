import React from "react";
import { CONFERENCES } from "../../lib/constants";
import { CommingSoon } from "../../components/PageComponents";

export default function ConferenceStandings({ match }) {
  const {
    params: { conferenceId },
  } = match;
  console.log(conferenceId);
  /* const conference = CONFERENCES.find(
    (con) =>
      con.file.toLowerCase() === conferenceId.toLowerCase()
  ); */

  return <CommingSoon header={`Standings`} />;
}
