import React, { useState } from "react";
import { BasicHeader } from "../utilities/PageComponents";
import { Button } from "react-bootstrap";

export default function Download() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    fetch(process.env.PUBLIC_URL + "/files/SIBA.zip")
      .then(response => {
        window.location.href = response.url;
      })
      .then(setDownloading(false));
  };

  return (
    <section className="container">
      <BasicHeader title="Download League File" />
      <p>
        The latest League File can be downloaded here. Be sure to upload the
        file into your own game to simulate the games throughout the league.
      </p>
      <Button type="submit" disabled={downloading} onClick={handleDownload}>
        {!downloading ? "Download" : "Loading..."}
      </Button>
    </section>
  );
}
