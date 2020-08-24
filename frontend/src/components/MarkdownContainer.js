import React from "react";
import { Content } from "./PageComponents";
import ReactMarkdown from "react-markdown";
import proSchedule from "../images/schedule.png";
import collegeDates from "../images/college-dates.png";
import collegeRegions from "../images/college-regions.png";
import collegeTournaments from "../images/college-tournaments.png";

export default function IframeContainer({ file, header }) {
  const [markdown, setMarkdown] = React.useState("");

  //getting the string version of the markdown file
  React.useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [file]);

  return (
    <Content header={header}>
      <ReactMarkdown source={markdown} renderers={{ image: SibaImage }} />
    </Content>
  );
}

function SibaImage({ alt, src }) {
  const getSrc = () => {
    switch (src) {
      case "college-dates.png":
        return collegeDates;
      case "college-regions.png":
        return collegeRegions;
      case "college-tournaments.png":
        return collegeTournaments;
      case "schedule.png":
        return proSchedule;
      default:
        return null;
    }
  };

  return <img style={{ padding: "0.5em" }} src={getSrc()} alt={alt || ""} />;
}
