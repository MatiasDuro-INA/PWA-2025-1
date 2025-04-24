import React from 'react'

export const Team = () => {
  return (
    <div class="team">
    <h2>Mi Equipo (max. 6)</h2>
    <img src="${pokemon.image}" alt="${pokemon.name}"/>
                    {/* <p>${pokemon.name}</p> */}
                    <button onclick="eliminarPokemon(${index})">X</button>
    </div>
  )
}
