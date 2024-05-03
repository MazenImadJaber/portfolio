import { NINJA_KEY } from "../secrets";
import React, { useEffect, useState } from 'react'

async function getImage() {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/randomimage?category=technology`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": NINJA_KEY,
          Accept: "image/jpg",
        },
      }
    );
    const imageBlob = await res.blob();
    return URL.createObjectURL(imageBlob);
  }

  

  
  export function useImage(){
    const [img, setImg] = useState();
    const [error, setError] = useState();
  useEffect(() => {
    (async () => {
      try {
        setImg(await getImage());
      } catch (err) {
        setError(err)
      }
    })();
  }, []);
    
      return { img, error };
}