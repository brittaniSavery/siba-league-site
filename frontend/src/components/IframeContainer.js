import React from "react";
import { Content } from "./PageComponents";

export default function IframeContainer({ file, header }) {
  return (
    <Content header={header}>
      <div className="generatedContainer">
        <iframe
          title={header}
          src={`${process.env.PUBLIC_URL}/files/${file}.html`}
        />
      </div>
    </Content>
  );
}
