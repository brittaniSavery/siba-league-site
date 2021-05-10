import React from "react";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { Helmet } from "react-helmet";

export default function Content({ id, header, hideHeader, children }) {
  const { trackPageView } = useMatomo();

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") trackPageView({});
  }, [trackPageView]);

  return (
    <section id={id} className="container">
      <Helmet>
        <title>{`${header} | SIBA`}</title>
      </Helmet>
      {!hideHeader && (
        <header>
          <h1>{header}</h1>
        </header>
      )}
      {children}
    </section>
  );
}
