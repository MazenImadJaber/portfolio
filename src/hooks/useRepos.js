import { useEffect, useState } from "react";
import { GITHUB_KEY, GIT_PUBLIC_URL } from "../secrets";

async function getRepos(){
    const res = await fetch(GIT_PUBLIC_URL);
    const data = await res.json();
    return data.map((x) => ({
        id: x.id,
        name: x.name,
        description: x.description,
        url: x.svn_url,
        created: x.created_at,
        language: x.language,
        languages_url: x.languages_url
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
    
      return { loading, repos, error };
}