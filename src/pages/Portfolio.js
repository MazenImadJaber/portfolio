import React, { useEffect, useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import RepoCard from "../components/RepoCard";
import LoadingSpanner from "../components/LoadingSpanner";
import { GITHUB_KEY, GIT_PUBLIC_URL } from "../secrets";
import SearchBar from "../components/SearchBar";
import "./Portfolio.css"
async function getRepos() {
  const res = await fetch(GIT_PUBLIC_URL, {
    method: "GET",
    headers: {
      Authorization: ` Bearer ${GITHUB_KEY}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const temp = await res.json();
  const data = temp.filter((x) => x.language);
  return data.map((x) => ({
    id: x.id,
    name: x.name,
    description: x.description,
    url: x.svn_url,
    created: x.created_at,
    language: x.language,
    image: null,
  }));
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (loading) {
      (async () => {
        try {
          const res = await getRepos();
          setRepos(res);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      })();
    }
  }, []);

  function updateImage(id, newImage) {
    const updatedRepos = repos.map((x) => {
      if (id === x.id) {
        return { ...x, image: newImage };
      }
      return x;
    });
    setRepos(updatedRepos);
  }

  function onSearchChange(value) {
    setSearchValue(value);
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
        <SearchBar onSearchChange={onSearchChange} />
      </Row>

      <Row>
        {repos
          .filter((repo) => {
            if (searchValue === "") {
              return repo;
            } else if (
              repo.name
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            ) {
              return repo;
            }
          })
          .map((data, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <RepoCard key={data.id} data={data} updateImage={updateImage} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
