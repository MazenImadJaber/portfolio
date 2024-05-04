import RepoLanguages from "./RepoLanguages";
import { Alert, Badge, Button, Card, Row } from "react-bootstrap";
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

export default function RepoCard({ data ,updateImage}) {
  const [img, setImg] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    if(!data.image){
      (async () => {
        try {

          const temp = await getImage()
          setImg(temp);
          updateImage(data.id, temp);
        } catch (err) {
          setError(err);
        }
      })();
    } else{
      setImg(data.image)
    }
   
  }, []);
  return (
    <Card className=" h-100">
      {error ? <Alert variant="primary">Error fetching image</Alert>:
      (img ? <Card.Img variant="top" src={img} /> : <LoadingSpanner />)
  }
      <Card.Body>
        <div>
          <Card.Title href={data.url}>{data.name}</Card.Title>
          {data.description ? (
            <Card.Text>Description: {data.description}</Card.Text>
          ) : (
            <Card.Text>No Description</Card.Text>
          )}
         <Card.Text>
              Language: <Badge>{data.language}</Badge>
            </Card.Text>
        </div>

        <div className="card-footer">
          <Button
            className="mt-6 btn-card"
            variant="primary"
            onClick={() => {
              window.open(data.url, "_blank");
            }}
          >
            Open in Github
          </Button>

          <small className="text-muted">
            {data.created.split("T")[0]}
          </small>
        </div>
      </Card.Body>
    </Card>
  );
}
