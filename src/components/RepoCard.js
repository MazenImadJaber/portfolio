import RepoLanguages from "./RepoLanguages";
import { Badge , Card} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { NINJA_KEY } from "../secrets";
import LoadingSpanner from "./LoadingSpanner";


async function getImage() {
  const res = await fetch(
    `https://api.api-ninjas.com/v1/randomimage?category=technology`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": NINJA_KEY,
        Accept: "image/jpg",
      },
    }
  );
  const imageBlob = await res.blob();
  return URL.createObjectURL(imageBlob);
}
export default function RepoCard({ data }) {
  const [img, setImg] = useState();
  useEffect(() => {
    (async () => {
      try {
        setImg(await getImage());
      } catch (err) {}
    })();
  }, []);
  return (
    <Card
    className="h-100 d-flex flex-column"

      onDoubleClick={() => {
        window.open(data.url, "_blank");
      }}
    >
        <Card.Body
        className="d-flex flex-column"
        >
          <Card.Title href={data.url}>{data.name}</Card.Title>
          {img ? <Card.Img variant="top" src={img} /> : <LoadingSpanner />}
          {data.description ? (
            <Card.Text>Description: {data.description}</Card.Text>
          ) : null}

          
          <div className="mt-auto">
          {data.language ? (
            <Card.Text>
              Language: <Badge>{data.language}</Badge>
            </Card.Text>
          ) : (
            <Card.Text>
              {" "}
              languages: <RepoLanguages url={data.languages_url} />{" "}
            </Card.Text>
          )}
          <small className="text-muted">{Date(data.date).toString().split('T')[0]}</small>
        </div>
        </Card.Body>
    </Card>
  );
}
