import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Content from "../layout/Content";
import HomeData from "../lib/home.md";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  //Getting the static blurb of the welcome page
  useEffect(() => {
    fetch(HomeData)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Content header="Welcome">
      <ReactMarkdown plugins={[gfm]} children={markdown} />
      <h2>Updates</h2>
      <p>
        A new version of the website is in progress! Be pardon our WIP status.
      </p>
    </Content>
  );
}
