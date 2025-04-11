import React, { useState } from 'react'
import { Titulo } from './Titulo'
import { useEffect } from 'react'

export const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])

    let ListaIds = [9, 25, 27, 47, 149, 77]


    const obtenerPokemon = async () => {
        // console.log(id);
        const nuevosPokemons = {}
        for (const id of ListaIds) {
            
            // console.log("Id: ", id);
            
            try {
                const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                const data = await respuesta.json()
                // console.log(`Pokemon ${data.name} - ID: ${data.id} - Altura: ${data.height} - Peso: ${data.weight} - Imagen: ${data.sprites.front_default}`);

                nuevosPokemons[data.name] = {
                    id: data.id,
                    nombre: data.name,
                    altura: data.height,
                    peso: data.weight,
                    sprite: data.sprites.other.showdown.front_default,
                }


            } catch (error) {
                console.error("Error: ", error)
            }
        }

        
        // console.log("PRIMERO");

        console.log("Respuesta: ", nuevosPokemons);
        
    
        // Object.Values al pasarle un un objeto, guarda los valores en un array


        setPokemons(Object.values(nuevosPokemons))
        
    }

    // Use Effect, es un Hook.
    // Todo lo que este dentro del useEffect, se va a ejecutar, 
    // dependiendo sus dependencias
    useEffect(() => {
        obtenerPokemon()           
    }, [])

    useEffect(() => {
        console.log("Pokemons: ", pokemons);
        // console.log("Se actualizo pokemons");
        
    }, [pokemons])
    

    // dependencias en [], se ejecutan una sola vez, cuando se monta el componente
    





    return (
        <div>
            <Titulo titulo={'Listado pokemons'} />
            {
                pokemons.length > 0 
                ?
                ( pokemons.map((poke, i) => {
                    
                    console.log("poke: ", poke);
                    
                    
                    return (
                    <div key={i}>
                        <h3>Id: {poke?.id}</h3>
                        <div>
                            <img src={poke?.sprite} alt={`Imagen de ${poke?.name}`} />
                        </div>
                        <h3>Nombre: {poke?.nombre}</h3>
                        <p>Peso: {poke?.peso}</p>
                        <p>Altura: {poke?.altura}</p>
                    </div>
                )})
                )
                :
                (
                    <h4>No hay pokemons...</h4>
                )

            }
        </div>
    )
}
