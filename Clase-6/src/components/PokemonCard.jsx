import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon';




function CargarPokemonsRandom(){

    const id = Math.floor(Math.random() * 151) + 1
    console.log("ID: ", id);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( res => res.json())
        .then( data => {
            console.log(data.sprites.other.showdown.front_default);
            
            currentPoke = {
                name: data.name,
                image: data.sprites.other.showdown.front_default
            }
            cargarPokemon(currentPoke)
        })
}

function cargarPokemon(pokemon){
    const card = document.getElementById('pokemon')

    card.innerHTML = `
        <h2>${(pokemon.name).toUpperCase()}</h2>
        <img src="${pokemon.image}" alt="${pokemon.name}"/>
    `
}

export const PokemonCard = () => {

    const [apiPokemon, setApiPokemon] = useState(null)


    const id = Math.floor(Math.random() * 151) + 1
    console.log("ID: ", id);
    

    let currentPoke;
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( res => res.json())
        .then( data => {
            console.log(data.sprites.other.showdown.front_default);
            
            currentPoke = {
                name: data.name,
                image: data.sprites.other.showdown.front_default
            }
            setApiPokemon(currentPoke)
        })
        
    }, [])
    
    useEffect(() => {
        console.log("apiPokemon: ", apiPokemon);
    }, [apiPokemon])
    
    if(!apiPokemon){
        return (
            <p>Cargando pokemon...</p>
        )
    }


  return (
    <div id="pokemon" class="pokemon-card">
        <Pokemon pokemon={apiPokemon} />
        {/* {
            // apiPokemon ? (<Pokemon pokemon={apiPokemon} />) : (<p>Cargando pokemon...</p>)
            apiPokemon && <Pokemon pokemon={apiPokemon} />
        } */}
    </div>
  )
}
