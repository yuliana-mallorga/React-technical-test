const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async() => {
    try {
        const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
        //TODO quiero saber ver si funciona la linea de abajo
       // if (!res.ok) throw new error('Error fetching fact');
        const data = await res.json()
        const { fact } = data
        return fact
    } catch (error) {
        console.error(error);
    }
}
  