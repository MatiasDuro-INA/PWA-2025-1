import React from 'react'

export const Pokemon = ({pokemon, atraparPokemon}) => {

    console.log("Pokemon: ", pokemon);
    

  return (
    <>
    <h2>{(pokemon.name).toUpperCase()}</h2>
        <img src={`${pokemon.image}`} alt={`${pokemon.name}`}/>
        <button onClick={atraparPokemon}>+</button>
    </>
  )
}
