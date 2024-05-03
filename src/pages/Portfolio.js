import React, { useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useRepos } from "../hooks/useRepos";
import RepoCard from "../components/RepoCard";
import LoadingSpanner from "../components/LoadingSpanner";

export default function Portfolio() {
  const { loading, repos, error } = useRepos();
  const [updatedRepo, SetUpdatedRepos]=useState()

  function  updateRepoLanguages(id, newLanguages){
    const updatedRepos = repos.map((x)=>{
      if(id == x.id){
        return ({...x,languages:newLanguages})
      }
      return x

    });
    SetUpdatedRepos(updatedRepos)  
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
    return <Alert variant="primary">error</Alert>;
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
            updateLanguages ={updateRepoLanguages}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
