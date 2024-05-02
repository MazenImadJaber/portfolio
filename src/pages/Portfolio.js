import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useRepos } from '../hooks/useRepos';
import RepoCard from '../components/RepoCard';
import LoadingSpanner from '../components/LoadingSpanner';


export default function Portfolio() {
    const {loading, repos, error } = useRepos();
    if(loading){
      return  (
        <Container>
        <h1>Portfolio loading. . .</h1>
            <LoadingSpanner />
            </Container>
        );
    }
    return (
        <Container>
            <h1>My Portfolio</h1>
            <Row>
            { repos.map((data,index)=> (
                <Col key={index} xs={12} sm={6} md={4} lg={3} >
                <RepoCard data={data}/>
                </Col>
            )) }
            </Row>
          
        </Container>
    );
};

