async function obtenerPokemon(listaIds) {
    let respuesta = {};

    try {
        // Paso 1: Fetch con todos los nombres de los 150 primeros Pokémon
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
        const data = await res.json();

        // Paso 2: Obtener los nombres de los pokémon con los IDs de la lista (recordá que el índice en la lista empieza desde 0, por eso restamos 1)
        const nombres = listaIds.map(id => data.results[id - 1].name);

        // Paso 3: Hacer fetch para cada nombre para obtener la info completa
        for (const nombre of nombres) {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
            const data = await resp.json();

            respuesta[data.name] = {
                id: data.id,
                nombre: data.name,
                altura: data.height,
                peso: data.weight,
                sprite: data.sprites.front_default
            };
        }

        console.log("Respuesta final: ", respuesta);
    } catch (error) {
        console.error("Error obteniendo los pokémon:", error);
    }
}

// Ejecución
let listaIds = [6, 49, 58, 150, 79, 66];
obtenerPokemon(listaIds);
