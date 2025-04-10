

// Devolver un objeto, que tenga de items, los nombres de los pokemons
// Segun el array de IDs, y que cada objeto, tenga id, altura, peso, sprite front default

// respuesta = {
//     pikachu: {
//         id: 1,
//         altura: 10,
//     },
//     Charmander: {
//         id: 1,
//         altura: 10,
//     },
// }

let ListaIds = [9, 25, 27, 47, 149, 77]
// https://pokeapi.co/api/v2/pokemon/

// function {

// }

// function()


let pokemons = {}


// console.log(element);

async function obtenerPokemon() {
    // console.log(id);
    for (let index = 0; index < ListaIds.length; index++) {
        const element = ListaIds[index];

        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${element}`)
            const data = await respuesta.json()
            // console.log(`Pokemon ${data.name} - ID: ${data.id} - Altura: ${data.height} - Peso: ${data.weight} - Imagen: ${data.sprites.front_default}`);

            let nombrePokemon = data.name
            
            pokemons[nombrePokemon] = {
                id: data.id,
                altura: data.height,
                peso: data.weight,
                sprite: data.sprites.front_default,
            }

        } catch (error) {
            console.error("Error: ")
        }
        // console.log(Pokemon);
    }
    
    // console.log("los pokemons", pokemons);

    console.log(pokemons.pikachu);
    
}
obtenerPokemon()


