import React, { useEffect, useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import RepoCard from "../components/RepoCard";
import LoadingSpanner from "../components/LoadingSpanner";
import { GIT_PUBLIC_URL } from "../secrets";
async function getRepos() {
  const res = await fetch(GIT_PUBLIC_URL);
  const data = await res.json();
  return data.map((x) => ({
    id: x.id,
    name: x.name,
    description: x.description,
    url: x.svn_url,
    created: x.created_at,
    language: x.language,
    languages_url: x.languages_url,
    languages: [],
    image: null,
  }));
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setRepos(await getRepos());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  function updateRepoLanguages(id, newLanguages) {
    const updatedRepos = repos.map((x) => {
      if (id === x.id) {
        return { ...x, languages: newLanguages };
      }
      return x;
    });
    setRepos(updatedRepos);
   
  }
  function updateImage(id, newImage) {
    const updatedRepos = repos.map((x) => {
      if (id === x.id) {
        return { ...x, image: newImage };
      }
      return x;
    });
    setRepos(updatedRepos);

  }

  if (loading) {
    return (
      <Container>
        <h1>Portfolio loading. . .</h1>
        <LoadingSpanner />
      </Container>
    );
  }
  if (error !== null) {
    return <Alert variant="primary">error fetching github data</Alert>;
  }

  return (
    <Container>
      <h1>My Portfolio</h1>
      <Row>
        {repos.map((data, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <RepoCard
              key={data.id}
              data={data}
              updateLanguages={updateRepoLanguages}
              updateImage={updateImage}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
