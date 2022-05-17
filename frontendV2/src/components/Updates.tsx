import { useEffect, useState } from "react";

export default function Updates() {
  const [updates, setUpdates] = useState([]);

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
          <h3>{new Date(u.published_at).toDateString()}</h3>
          {u.content}
        </>
      ))}
    </>
  );
}
