import React from "react";
import Content from "../layout/Content";

export default function IframeContainer({ file, header }) {
  const [loading, setLoading] = React.useState(true);

  const loadIframe = () => {
    setLoading(false);
    var frame = document.getElementById("generatedContent");
    frame.style.height = frame.contentWindow.document.body.scrollHeight + "px";
    frame.style.width = frame.contentWindow.document.body.scrollWidth + "px";
    frame.style.visibility = "unset";
  };

  return (
    <Content header={header} hideHeader fullWidth>
      {loading && <p className="text-center font-weight-bold">Loading...</p>}
      <iframe
        id="generatedContent"
        title={header}
        src={`${process.env.PUBLIC_URL}/files/${file}.html`}
        onLoad={loadIframe}
        style={{ visibility: "hidden" }}
      />
    </Content>
  );
}
