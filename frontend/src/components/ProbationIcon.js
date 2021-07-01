import React from "react";
import { InlineIcon } from "@iconify/react";
import exclamationCircle from "@iconify-icons/fa-solid/exclamation-circle";

export default function ProbationIcon({ isPadded }) {
  return (
    <InlineIcon
      icon={exclamationCircle}
      color="#721121"
      style={{ marginRight: isPadded && "0.25rem" }}
      alt="On Probation"
    />
  );
}
