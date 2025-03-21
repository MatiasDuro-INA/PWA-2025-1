let frutas = ["Banana", "Manzana", "Frutilla"]

// console.log(frutas);

// push: agrega un elemento al final del array

frutas.push("Mango")

// console.log(frutas);

// pop: elimina el ultimo elemento del array
frutas.pop()

// console.log(frutas);


// unshift: agrega un elemento al comienzo del array
frutas.unshift("Uvas")

// console.log(frutas);

// shift: remueve el primer elemento del array
frutas.shift()

// console.log(frutas);


// Map: Va a recorrer cada elemento del array, los va a transformar uno por uno,  
// y devuelve un nuevo array, segun la funcion que elijamos
let numeros = [1, 2, 3, 4, 5, 6, 7]

// let nuevosNumeros2 = numeros.map(num => num + 5)
// console.log(nuevosNumeros2);

let nuevosNumeros = numeros.map(num => {
    return num * num
})

// console.log(numeros);


// console.log(nuevosNumeros);


// Filter: Filtra los elementos, 1 por 1, segun la condicion, y devuelve el nuevo array

let mayores = numeros.filter(numero => numero <= 5)
// console.log(mayores);


let Carrito = [
    {
        nombre: "Tostadora",
        cantidad: 2,
        precio: 2000
    },
    {
        nombre: "Cafetera",
        cantidad: 3,
        precio: 1500
    },
    {
        nombre: "TV",
        cantidad: 1,
        precio: 2000
    }
]
// Reduce: reduce el array a un solo valor, acumulandolo en un acumulador

let cantidadCarrito = Carrito.reduce((acumulador, item) => {
    return acumulador + item.cantidad
}, 0)

let totalCarrito = Carrito.reduce((acumulador, item) => {
    return acumulador + (item.precio * item.cantidad)
}, 0)

// console.log("Cantidad en el carrito: ", cantidadCarrito);
// console.log("Monto total en el carrito: ", totalCarrito);


// find: Devuelve el PRIMER elemento que cumpla con la condicion
let busqueda = numeros.find( num => num > 5)

// console.log(busqueda);

// Some: Devuelve true si al menos un elemento, cumple con la condicion
let existeEl6 = numeros.some( num => num == 8)

// console.log("Existe este numero?: ",existeEl6);

//Every: Devuelve true si TODOS los elementos, cumplen con la condicion
let todos = numeros.every( num => num < 7)

// console.log("Existe este numero?: ",todos);

//Join: Convierte el array a string, y los separa a cada elemento con el separador que asignemos


let numerosNuevos = numeros.join("///")

// console.log(numerosNuevos);
// console.log(numeros);

// Da vuelta el array
// numeros.reverse()

// console.log(numeros);

//Splice: modifica el array eliminando y reemplazando por otro los elementos que querramos
// Y retorna el elemento eliminado

console.log(numeros);

let eliminados = numeros.splice(5, 2, "Peras", "Duraznos")

// console.log(numeros);

// console.log(eliminados);

// Concat: Devuelve una concatenacion de un array con otro

let ArrayConcatenado = numeros.concat(frutas)

console.log(ArrayConcatenado);


// Proxima Clase: 

// Ciclos FOR

















