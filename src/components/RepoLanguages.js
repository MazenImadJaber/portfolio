import React, { useEffect, useState } from "react";
import { Badge, Spinner } from "react-bootstrap";
import LoadingSpanner from "./LoadingSpanner";
import { GITHUB_KEY } from "../secrets";
export async function getRepoLanguages(url) {
  const res = await fetch(
    url,
    {
      method: "GET",
      headers: {
        Authorization:` Bearer ${GITHUB_KEY}`,
        'X-GitHub-Api-Version': "2022-11-28",
      },
    }
  )
  const data = await res.json();

  return Object.keys(data);
}

export default function RepoLanguages(props) {
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    
    (async () => {
      try {
        const temp = await getRepoLanguages(props.url);
        setLanguages(temp);
        props.updateLanguages(props.id, temp);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) {
    return <LoadingSpanner />;
  }
  return (
    <div>
      {languages.map((x,i) => (
        <Badge key={i+x+props.url}>{x}</Badge>
      ))}
    </div>
  );
}
