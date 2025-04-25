import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon';
import { usePoke } from '../context/PokemonContext';
import { Button } from './Button';




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

    const { pokemon, setPokemon, atraparPokemon, cargarPokemon } = usePoke()

    

   
    
    useEffect(() => {
        cargarPokemon()
        
    }, [])
    
    useEffect(() => {
        console.log("pokemon: ", pokemon);
    }, [pokemon])
    
    if(!pokemon){
        return (
            <p>Cargando pokemon...</p>
        )
    }

    // const hacerTodo = () => {
    //     atraparPokemon()
    //     cargarPokemon()
    // }


  return (
    <div id="pokemon" class="pokemon-card">
        <Pokemon pokemon={pokemon} />
        {/* {
            // pokemon ? (<Pokemon pokemon={pokemon} />) : (<p>Cargando pokemon...</p>)
            pokemon && <Pokemon pokemon={pokemon} />
        } */}
             <Button titulo={"Atrapar"} handleClick={atraparPokemon}/>
             <Button titulo={"Pasar"} handleClick={cargarPokemon}/>
    </div>
  )
}
