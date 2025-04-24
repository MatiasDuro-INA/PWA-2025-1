import React from 'react'

export const Pokemon = ({pokemon}) => {

    console.log("Pokemon: ", pokemon);
    

  return (
    <>
    <h2>{(pokemon.name).toUpperCase()}</h2>
        <img src={`${pokemon.image}`} alt={`${pokemon.name}`}/>
    </>
  )
}
