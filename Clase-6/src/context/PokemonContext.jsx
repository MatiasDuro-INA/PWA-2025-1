import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
export const PokemonContext = createContext()

// Hook para usar el contexto de forma mas sencilla
export const usePoke = () => useContext(PokemonContext)

export const PokeProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState(null)
    const [team, setTeam] = useState([])

    function atraparPokemon(){
        if(team.length >= 6){
            return
        }

        if(pokemon){
            // (prev) => [...prev, producto]
            setTeam((prev) => [...prev, pokemon])
            localStorage.setItem('poketeam', JSON.stringify(team))
            cargarPokemon()
        }
    }

     const cargarPokemon = () => {
            const id = Math.floor(Math.random() * 151) + 1
            let currentPoke;
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then( res => res.json())
            .then( data => {
                console.log(data.sprites.other.showdown.front_default);
                
                currentPoke = {
                    name: data.name,
                    image: data.sprites.other.showdown.front_default
                }
                setPokemon(currentPoke)
            })
        }


    function eliminarPokemon(pokeIndex) {
        // setCarrito(carrito.filter((cart) => cart.id !== id))

        setTeam(team.filter((poke, index) => index !== pokeIndex))
        
    }

    return (
        <PokemonContext.Provider value={{eliminarPokemon, atraparPokemon, pokemon, setPokemon, team, cargarPokemon}}>
            {children}
        </PokemonContext.Provider>
    )
}
