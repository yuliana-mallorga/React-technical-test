import { useEffect, useState } from "react";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact";
import { Otro } from "./Component/Otro"


export function App() {
  const { fact, refreshFact } = useCatFact ()
  const { imageUrl } = useCatImage({ fact })
  
  const handleClick = async () => {
   refreshFact()
  };

  return (
    <main>
      <h1>App de gatitos </h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p> {fact} </p>}
      {!imageUrl && <div className="lds-dual-ring loading" />}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using the first word for ${fact}`}
        />
      )}
      <div className="second-section">
        <Otro/>
      </div>
    </main>
  );
}
