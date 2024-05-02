import { useState } from "react";
import { GIT_PUBLIC_URL } from "../secrets";

async function getRepos(){
    const res = await fetch(GIT_PUBLIC_URL);
    const data = await res.json();
    return data.map((x) => ({
        id: x.id,
        name: x.name,
        description: x.description,
        url: x.url,
        created: x.created_at,
        language: x.language
    }))
}

export function useRepos(){
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async () => {
          try  {
            setRepos(await getRepos());
            setLoading(false);
          } catch( err){
            setError(err);
            setLoading(false);
          }
          
        })();
      }, []);
    
      return { loading, headlines, error };
}