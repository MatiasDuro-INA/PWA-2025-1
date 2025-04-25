import React from 'react'
import { usePoke } from '../context/PokemonContext'

export const Team = () => {

  // llamar eliminarPokemon del contexto
  const { team, eliminarPokemon } = usePoke()

  return (
    <div className="team">
    <h2>Mi Equipo (max. 6)</h2>

    {
      team.map((poke, index) => {
        return (
        <div key={index}>
        <img src={poke.image} alt={poke.name}/>
          <p>{poke.name}</p>
          {/* Pasarle eliminarPokemon al onclick delbutton */}
        <button onClick={() => eliminarPokemon(index)}>X</button>
        </div>
      ) })
    }
    </div>
  )
}
