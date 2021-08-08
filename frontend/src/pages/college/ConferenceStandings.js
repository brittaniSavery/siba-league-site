import React from "react";
import IframeContainer from "../../components/IframeContainer";
import { CONFERENCES } from "../../lib/constants";

export default function ConferenceStandings({ match }) {
  const {
    params: { conference },
  } = match;

  const selected = CONFERENCES.find(
    (con) => con.file.replace(/\s/, "-").toLowerCase() === conference
  );

  return (
    <IframeContainer
      header={`${selected.title} Standings`}
      file={`college/Website/${selected.file.replace(/\s/, "_")}_Standings`}
    />
  );
}
