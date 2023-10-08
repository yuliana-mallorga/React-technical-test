import { useState, useEffect } from 'react';

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
    
        if (!fact) return;
  
        const threeFirstWord = fact.split(" ", 3).join(" ");
  
        fetch(
          `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
        )
          .then((res) => {
            if (!res.ok) throw new error("Error fetching url");
            return res.json();
          })
          .then((response) => {
            const { url } = response;
            setImageUrl(url);
          });
    }, [fact]);
    return { imageUrl }
  } //devuelve {imageUrl: 'https://...'}