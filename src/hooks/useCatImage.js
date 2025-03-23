import { useState, useEffect } from 'react';

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
      if (!fact) return;

      const fetchCatImage = async () => {
        try {
          const threeFirstWords = fact.split(" ", 3).join(" ");
          const res = await fetch(
            `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
          );
  
          if (!res.ok) throw new Error("Error fetching URL");
  
          const response = await res.json();
          setImageUrl(response.url);
        } catch (error) {
          console.error("Error fetching cat image:", error);
        }
      };
  
      fetchCatImage();
    }, [fact]);

    return { imageUrl:`${imageUrl}` }
  } 