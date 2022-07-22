import { SiteUpdate } from "@lib/global";
import { getFormattedDate } from "@lib/utils";
import { useEffect, useState } from "react";

export default function Updates() {
  const [updates, setUpdates] = useState<SiteUpdate[]>([]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.PUBLIC_CMS_URL
      }/site-updates?_limit=5&_start=0&_sort=published_at:DESC`
    )
      .then((response) => response.json())
      .then((data) => {
        setUpdates(data);
      });
  }, []);

  return (
    <>
      {updates.map((u) => (
        <>
          <h3>{getFormattedDate(u.published_at)}</h3>
          <p>{u.content}</p>
        </>
      ))}
    </>
  );
}
