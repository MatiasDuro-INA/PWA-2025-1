import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
export const PokemonContext = createContext()

// Hook para usar el contexto de forma mas sencilla
export const useCart = () => useContext(PokemonContext)

export const CartProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState([]) 

    function atraparPokemon(){
        if(team.length >= 6){
            alert("Tu equipo ya tiene 6")
            return
        }

        if(currentPoke){
            team.push(currentPoke)
            localStorage.setItem('poketeam', JSON.stringify(team))
            CargarEquipo()
            CargarPokemonsRandom()
        }
    }

    function CargarEquipo(){
            const container = document.getElementById('teamContainer')

            team.forEach((pokemon, index) => {
                const div = document.createElement('div');
                
                    <img src={`${pokemon.image}`} alt={`${pokemon.name}`}/>
                    <p>{`${pokemon.name}`}</p>
                    <button onClick="eliminarPokemon(${index})">X</button>
                

                container.appendChild(div)

            });
    }

    function eliminarPokemon(index) {
        team.splice(index, 1)
        localStorage.setItem('poketeam', JSON.stringify(team))
        CargarEquipo()
    }
}
