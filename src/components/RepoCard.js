import React from 'react';
import Card from 'react-bootstrap/Card';
import RepoLanguages from './RepoLanguages';
import { Badge } from 'react-bootstrap';

const RepoCard = ({ data }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ID: {data.id}</Card.Subtitle>
        <Card.Text>{data.description}</Card.Text>
        <Card.Link href={data.url}>Link</Card.Link>
        <Card.Text>Created: {data.created}</Card.Text>
       {data.language ? <Card.Text>Language: <Badge>{data.language}</Badge></Card.Text> : <Card.Text> languages: <RepoLanguages url={data.languages_url}/> </Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default RepoCard;