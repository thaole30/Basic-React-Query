import React, { useEffect, useState } from 'react'

const Characters = () => {

    const [characters, setCharacter] = useState([]);


    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log("data", data.results);
        setCharacter(data.results);
    }
        
    useEffect(() => {
        fetchCharacters()
    }, []);

  return (
    <div>
        {
            characters?.map((character) => {
              return <div key={character.id}>{character.name}</div>
            })
        }
    </div>
  )
}

export default Characters