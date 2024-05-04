import React, { useEffect, useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import RepoCard from "../components/RepoCard";
import LoadingSpanner from "../components/LoadingSpanner";
import { GITHUB_KEY, GIT_PUBLIC_URL } from "../secrets";
import SearchBar from "../components/SearchBar";
import "./Portfolio.css";
import FilterDropdown from "../components/FilterDropdown";
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

export default function Portfolio(props) {
  // states for repos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // state for text search bar
  const [searchValue, setSearchValue] = useState("");
  // state for selected langague, defualt all
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  // init dropdwon options for langague filtering
  const [dropdownOptions, setDropDownOptions] = useState([]);

  useEffect(() => {
    if (props.repos.length === 0) {
      (async () => {
        try {
          const res = await getRepos(); // get github repos
          props.setRepos(res);
          // get unique languages from the fetched data and set them to the dropdowns
          setDropDownOptions([...new Set(res.map((x) => x.language)), "All"]);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      })();
    }else{
      setLoading(false)
      setDropDownOptions([...new Set(props.repos.map((x) => x.language)), "All"]);
    }
  }, []);
  // callback function to update the repos with an image genrated from the ninjas api
  function updateImage(id, newImage) {
    props.setRepos((old) => {
      return old.map((x) => {
        if (id === x.id) {
          return { ...x, image: newImage };
        }
        return x;
      });
    });
  }
  // callback function to updated text search value from the search bar
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
        <Col className="col-8">
          <SearchBar onSearchChange={onSearchChange} />
        </Col>
        <Col className="col-4 d-flex">
          <FilterDropdown
            options={dropdownOptions}
            onSelect={setSelectedLanguage}
          />
        </Col>
      </Row>

      <Row>
        {props.repos
          // filter repos with the language and search text
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
          .filter((repo) => {
            if (selectedLanguage === "All") {
              return repo;
            } else if (repo.language === selectedLanguage) return repo;
          })
          // map them to card componenets
          .map((data, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <RepoCard key={data.id} data={data} updateImage={updateImage} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
