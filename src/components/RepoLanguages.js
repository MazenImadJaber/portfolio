import React, { useEffect, useState } from 'react'
import { Badge, Spinner } from 'react-bootstrap';
import LoadingSpanner from './LoadingSpanner';
export async function getRepoLanguages(url){
  const res = await fetch(url);
  const data = await res.json();
  
  return Object.keys(data);
}

export default function RepoLanguages(props) {

  const[loading,setLoading]=useState(false)
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
   
          <LoadingSpanner />
       
      );
  }
  return (
    <div>
      {languages.map((x)=> <Badge>{x}</Badge>)}
    </div>
  )
}
