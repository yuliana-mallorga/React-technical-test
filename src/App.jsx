import { useEffect, useState } from "react";
import "./App.css";
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`;

export function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState();
  
  const getRandomFact = () =>{
    try {
      fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then((res) => {
         if(!res.ok) throw new error ('Error fetching fact')
         return res.json()
        })
        .then((resp) => {
          console.log('la respuesta', resp);
          const { fact } = resp;
          setFact(fact); 
        }); 
    } catch (error) {
      console.error(error);
    }
  }
  
  // Para recuperar la cita al cargar la pagina.
  useEffect(getRandomFact, []);  

  // Para recuperar la imagen cada vez que tenemos una cita nueva.
  useEffect(() => {
    try {
     if (!fact) return

      const threeFirstWord = fact.split(" ", 3).join(" ");
          console.log(threeFirstWord);
          fetch(
            `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
          )
            .then((res) => {
              if(!res.ok) throw new error ('Error fetching url')
              return res.json()
            })
            .then((response) => {
              const { url } = response;
              setImageUrl(url);
            });
    } catch (error) {
      console.error(error);
    }
  },[fact])

  const handleClick = () => {
    getRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos </h1>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p> {fact} </p>}
        {!imageUrl && (
          <div className="lds-dual-ring loading"/>
        )}
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl} `}
            alt={`image extracted using the first word for ${fact}`}
          />
        )}   
    </main>
  );
}

