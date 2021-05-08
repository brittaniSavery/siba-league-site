import React from "react";
import { useHistory, useParams } from "react-router";

export default function Article() {
  const { article } = useParams();
  const history = useHistory();
  return <></>;
}
