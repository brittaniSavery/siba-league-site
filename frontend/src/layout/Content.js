import React from "react";
import { useMatomo } from "@datapunt/matomo-tracker-react";

export default function Content({ header, children }) {
  const { trackPageView } = useMatomo();

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") trackPageView({});
  }, [trackPageView]);

  return (
    <section className="container">
      <header>
        <h1>{header}</h1>
      </header>
      {children}
    </section>
  );
}
