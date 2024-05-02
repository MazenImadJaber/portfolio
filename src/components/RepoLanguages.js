import React, { useEffect, useState } from 'react'
import { Badge, Spinner } from 'react-bootstrap';
async function getRepoLanguages(url){
  const res = await fetch(url);
  const data = await res.json();
  
  return Object.keys(data);
}

export default function RepoLanguages(props) {
  // const [loading, languages, error] = useRepoLanguages("")
  const[loading,setLoading]=useState(true)
  const[languages, setLanguages]=useState([])

  useEffect(() => {
    (async () => {
      try  {
        setLanguages(await getRepoLanguages(props.url))
        setLoading(false);
      } catch( err){
        setLoading(false);
      }
      
    })();
  }, []);
  if(loading){
    return  (
   
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
       
      );
  }
  return (
    <div>
      {languages.map((x)=> <Badge>{x}</Badge>)}
    </div>
  )
}
