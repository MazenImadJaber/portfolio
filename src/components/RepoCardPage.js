import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./RepoCard.css";

export default function RepoCardPage({ data }) {
  return (
    <Container className=" h-100">
      <Row>
        <Col>
          <img src={data.image} />
        </Col>
        <Col>
          <Card className=" h-100">
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
        </Col>
      </Row>
    </Container>
  );
}
