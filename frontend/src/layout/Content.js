import React from "react";

export default function Content({ header, children }) {
  return (
    <section className="container">
      <header>
        <h1>{header}</h1>
      </header>
      {children}
    </section>
  );
}
