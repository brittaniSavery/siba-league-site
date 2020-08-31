import React from "react";
import { useLocation } from "react-router-dom";
import Content from "../layout/Content";
import moment from "moment";

export default function Download() {
  const { pathname } = useLocation();
  let [files, setFiles] = React.useState([]);
  const path = pathname.match(/\/(\w+)\//)[1];
  const leagueName = path === "college" ? "SICBA" : path.toUpperCase();
  const leagueType = path === "siba" ? "pro" : path;
  const mainUrl = `${process.env.PUBLIC_URL}/files/${leagueType}`;

  React.useEffect(() => {
    Promise.all([
      fetch(`${mainUrl}/${leagueName.toUpperCase()}.zip`),
      fetch(`${mainUrl}/${leagueName.toLowerCase()}graphics.zip`),
    ]).then(([leagueFile, graphicsFile]) => {
      setFiles([
        {
          url: leagueFile.url,
          title: "League File",
          description:
            "This file runs all the simulation from the league. Add this to your own copy of the program so you have the most updated version of the league.",
          modifiedDate: leagueFile.headers.get("Last-Modified"),
        },
        {
          url: graphicsFile.url,
          title: "Graphics File",
          description:
            "This file holds all the graphics of the players and coaches of the league. Make sure to add this file to your copy of the program to have a customized experience of the league.",
          modifiedDate: graphicsFile.headers.get("Last-Modified"),
        },
      ]);
    });
  }, [mainUrl, leagueName]);

  return (
    <Content header={`Download ${leagueName} Program Files`}>
      <p>
        Below are the necessary files for the {leagueType} league ({leagueName}
        ). Make sure all your files are up to date.
      </p>
      {files.map((file) => (
        <p>
          <b>
            <a href={file.url} download>
              {file.title}:&nbsp;
            </a>
          </b>
          {file.description}
          <br />
          <i>Last Modified: {moment(file.modifiedDate).format("LLL")}</i>
        </p>
      ))}
    </Content>
  );
}
