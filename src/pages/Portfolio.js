import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useRepos } from '../hooks/useRepos';
import RepoCard from '../components/RepoCard';


export default function Portfolio() {
    const {loading, repos, error } = useRepos();
    if(loading){
      return  (
        <Container>
        <h1>Portfolio loading. . .</h1>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            </Container>
        );
    }
    return (
        <Container>
            <h1>My Portfolio</h1>
            { repos.map((data)=> <RepoCard data={data}/>) }
        </Container>
    );
};

