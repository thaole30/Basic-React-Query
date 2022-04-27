import React from 'react';
import { useQuery } from 'react-query';
import Character from './Character';

const CharacterWithQuery = () => {

  
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  }
    
  const {data, status} = useQuery("characters", fetchCharacters);
  console.log("data", data);
  console.log("status", status);

  if(status === "loading") {
    console.log("isloading")
    return <div>Loading...</div>
  }

  if(status === "error") {
    console.log("isError")
    return <div>Sth wrong...</div>
  }

  return (
    <div className="characters">
      {
        data?.results?.map((character) => {
              return <Character character={character}/>
        })
      }
    </div>
  )
}

export default CharacterWithQuery