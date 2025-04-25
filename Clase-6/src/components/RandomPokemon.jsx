import React, { useEffect } from 'react'
import { usePoke } from '../context/PokemonContext'
import { Pokemon } from './Pokemon'
import { Team } from './Team'

export const RandomPokemon = () => {

    // const data = usePoke()
    // console.log("Data: ", data.pokemon);
    const { pokemon, cargarPokemon, atraparPokemon } = usePoke()

    useEffect(() => {
        cargarPokemon()
    }, [])
    
    
  if(!pokemon){
    return ( <h1>Sin Pokemon...</h1>)
  }

  return (
    <div>
        <Pokemon atraparPokemon={atraparPokemon} pokemon={pokemon} />
        <button onClick={atraparPokemon}>Agregar Pokemon</button>
        <button onClick={cargarPokemon}>Cambiar Pokemon</button>
        <Team/>
    </div>
  )
}
