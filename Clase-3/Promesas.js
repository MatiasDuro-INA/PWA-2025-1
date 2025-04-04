// PROMESAS

// Las promesas permiten manejar tareas de forma asincronica (Igual que los callbacks)
// Una promesa representa una operacion que aun no termino, pero lo va a hacer en el futuro

// Promesa Basica

console.log("Inicio...");

// const promesaBasica = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const exito = true
//         if(exito){
//             resolve("Operacion Exitosa")
//         }else{
//             reject("Operacion fallida")
//         }
//     }, 2000);
// })

// console.log("Promesa: ", promesaBasica);

// setTimeout(() => {
//     console.log("Promesa: ", promesaBasica);

// }, 3000);


// EL USO DE THEN/ CATCH / FINALLY
// el finally es casi opcional

// Catch: Atrapa el error, atrapa el reject
// Finally: Finalmente, le da un cierre a la promesa
// then: entonces

// array.map( ar => {
    
// })

// promesaBasica
//     .then((resultado) => {
//     console.log("Entonces...");
//     console.log("Then: ", resultado);
//     })
//     .catch((error) => {
//         console.log("Algo salio mal...");
//         console.error("Catch: ", error)
//     })
//     .finally(() => {
//         console.log("Termino");
//         console.log("Esto se ejecuta siempre, haya error o no");
//     })

// Funcion que devuelve una promesa
function obtenerNumeroConDelay(numero) {
    return new Promise( (resolve, reject) => {
        if(!numero) reject(0)

        setTimeout(() => {
            resolve(numero)
        }, 1);
    })
}
function ObtenerPalabraConDelay(palabra) {
    return new Promise( (resolve, reject) => {
        if(!palabra) reject("Nada")

        setTimeout(() => {
            resolve(palabra)
        }, 1);
    })
}
//  Si se usa funcion flecha, en la misma linea, no hace falta ni {} ni return
// obtenerNumeroConDelay(42).then( num => console.log( "Numero Recibido: ", num))
// ObtenerPalabraConDelay("Vehiculo").then( palabra => console.log( "palabara Recibido: ", palabra))

// PROMISE.ALL 
// Ejecuta varias promesas en paralelo, y espera que todas terminen

const promesas = [
    obtenerNumeroConDelay(7),
    ObtenerPalabraConDelay("Parlante")
]


// Promise.all(promesas)
//         .then((resultados) => {
//             console.log("Resultados de todas las promesas: ", resultados);
//         })


// PROMESA CON FETCH
// fetch: funcion nativa de javascript
// Que lo que hace es devolver una PROMESA, que resuelve con la respuesta de la red
// let imagenPokemon;

// const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/pikachus")
//                 .then((res) => res.json())
//                 .then( data => {
//                     // console.log("Data: ", data);
//                     console.log("Nombre del pokemon: ", data.name);
//                     console.log("Id del pokemon: ", data.id);
//                     console.log("Peso: ", data.weight);
//                     console.log("Sprite: ", data.sprites.front_default);
//                     // imagenPokemon = data.sprites.front_default
//                 })
//                 .catch( err => {
//                     console.error("Error al obtener pokemon: ", err)
//                 })

// console.log("Imagen Pokemon: ", imagenPokemon);
                


// ASYNC / AWAIT
// Es una forma mas legible de trabajar con promesas

// ASYNC se usa para declarar a una funcion como asincrona
// Puedo declarar que en algun punto, se quede a esperar algo
// Para que algo espere, le agrego el await adelante


// Para validar que algo funcione, y retener errores, se usa try y catch
// Try: Intenta ejecutar el codigo

async function obtenerPokemon(nombre){

    let alturaPokemon;

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const data = await respuesta.json()
        console.log(`Pokemon ${data.name} - Altura: ${data.height} - ID: ${data.id}`);
        alturaPokemon = data.height

        const respuesta2 = await fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
        const data2 = await respuesta2.json()
        console.log(`Pokemon ${data2.name} - Altura: ${data2.height} - ID: ${data2.id}`);

    } catch (error) {
        console.error( "Error usando async/await: ")
        alturaPokemon = "No se encontro el pokemon"
    }

    console.log(alturaPokemon);
}

obtenerPokemon("pikachu")

//
// CALLBACKS Anidados o callbackhell => Codigo muy dificil de leer
// Promesas => Encadenamiento mas sencillo de entender, con then/ catch
// Async/Await => Escritura mas sencilla de leer  (Parece codigo sincronico, pese a no serlo)

// Resumido:
// Promise = representa una operacion que puede completarse, o fallar
// then() = se ejecuta si salio todo bien
// catch() = se ejecuta si algo salio mal
// finally() = medio opcional, se ejecuta al final independientemente de si salio bien o mal
// Promise.all = espera que todas las promesas se resuelvan
// async- await = forma moderna de escribir codigo asincrono
