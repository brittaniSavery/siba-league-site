import React from "react";
import { Content } from "./PageComponents";
import ReactMarkdown from "react-markdown";
import proSchedule from "../images/schedule.png";

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

function SibaImage({ file = {} }) {
  return (
    <img style={{ padding: "0.5em" }} src={proSchedule} alt={file.alt || ""} />
  );
}
