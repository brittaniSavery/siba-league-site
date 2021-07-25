import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { DateTime } from "luxon";
import Content from "../layout/Content";
import { PRO, PRO_LEAGUE, COLLEGE, COLLEGE_LEAGUE } from "../lib/constants";

export default function Download() {
  const { league } = useParams();
  const history = useHistory();
  const leagueName = league === COLLEGE ? COLLEGE_LEAGUE : PRO_LEAGUE;
  const leagueType = league === COLLEGE ? COLLEGE : PRO;
  const mainUrl = `${process.env.PUBLIC_URL}/files/${leagueType}`;
  let [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    if (![COLLEGE, PRO_LEAGUE.toLowerCase()].includes(league))
      history.replace("/404");

    fetch(`${process.env.REACT_APP_FILE_TIMES_URL}?league=${leagueType}`)
      .then((result) => result.json())
      .then((times) =>
        setFiles([
          {
            url: `${mainUrl}/${leagueName}.zip`,
            title: "League File",
            description:
              "This file runs all the simulation from the league. Add this to your own copy of the program so you have the most updated version of the league.",
            modifiedDate: times.league,
          },
          {
            url: `${mainUrl}/DDS${leagueType === PRO ? "P" : "C"}B2021.zip`,
            title: "Graphics File",
            description:
              "This file holds all the graphics of the players and coaches of the league. Make sure to add this file to your copy of the program to have a customized experience of the league.",
            modifiedDate: times.graphics,
          },
        ])
      );
  }, [history, league, leagueName, leagueType, mainUrl]);

  return (
    <Content
      id={`download-${leagueType}`}
      header={`Download ${leagueName} (${leagueType}) Program Files`}
    >
      <p>
        Below are the necessary files for the {leagueType} league ({leagueName}
        ). Make sure all your files are up to date.
      </p>
      {files.map((file) => (
        <p key={file.title}>
          <b>
            <a href={file.url} download>
              {file.title}:
            </a>
          </b>
          &nbsp;
          {file.description}
          <br />
          <i>
            Last Modified:{" "}
            {DateTime.fromSeconds(file.modifiedDate).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </i>
        </p>
      ))}
    </Content>
  );
}
