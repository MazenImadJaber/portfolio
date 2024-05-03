import RepoLanguages from "./RepoLanguages";
import { Badge, Button, Card, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import LoadingSpanner from "./LoadingSpanner";
import { NINJA_KEY } from "../secrets";
import "./RepoCard.css";
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

export default function RepoCard({ data , updateLanguages}) {
  const [img, setImg] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    (async () => {
      try {
        setImg(await getImage());
      } catch (err) {
        setError(err);
      }
    })();
  }, []);
  return (
    <Card className=" h-100">
      {img ? <Card.Img variant="top" src={img} /> : <LoadingSpanner />}
      <Card.Body>
        <div>
          <Card.Title href={data.url}>{data.name}</Card.Title>
          {data.description ? (
            <Card.Text>Description: {data.description}</Card.Text>
          ) : (
            <Card.Text>No Description</Card.Text>
          )}
          {data.language ? (
            <Card.Text>
              Language: <Badge>{data.language}</Badge>
            </Card.Text>
          ) : (
            <Card.Text>
              languages: <RepoLanguages 
              url={data.languages_url}
              id = {data.id}
              updateLanguages = {updateLanguages} />{" "}
            </Card.Text>
          )}
        </div>

        <div class="card-footer">
          <Button
            className="mt-6"
            variant="primary"
            onClick={() => {
              window.open(data.url, "_blank");
            }}
          >
            Open in Github
          </Button>

          <small className="text-muted">
            {Date(data.date).toString().split("T")[0]}
          </small>
        </div>
      </Card.Body>
    </Card>
  );
}
