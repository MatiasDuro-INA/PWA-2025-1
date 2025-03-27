    // Indice: 0        1           2           3
let frutas = ["Pera", "Frutilla", "Banana", "Manzana"]


// console.log("El Length de frutas es: ", frutas.length);

// console.log(frutas[3]);


for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
}

// While
// Se utiliza cuando no sabemos cuantas veces queremos iterarlo

let contador = 0;

while (contador <= 8) {
    // console.log("El contador es: ", contador);
    contador++
}

let respuestaExitosa;
while (respuestaExitosa === undefined) {

    // console.log('Cantidad de veces ejecutada');
    
    respuestaExitosa = true
}

let Menu = 6;

let opcionElegida;

// !== 0 ///  NO ES 0

while (Menu !== 0){
    switch (Menu) {
        case 1:
            opcionElegida = "Pollo"
            break;
        case 2:
            opcionElegida = "Carne"
            break;
        case 3:
            opcionElegida = "Cerdo"
            break;
        case 4:
            opcionElegida = "Verdura"
            break;
        default:
            opcionElegida = "No se encuentra en el menu"
            break;
    }
    Menu = 0
}

// console.log(opcionElegida);

// Do while
// Simpre se ejecuta al menos una vez

let marcador = 2
do {
    // console.log("Esto por ahora es: ", marcador);
    
    marcador++
} while (marcador < 5);


// FOR OF
// SIRVE PARA RECORRER VALORES DE ARRAYS
const colores = ["Azul", "Rojo", "Verde"]

for (const color of colores) {
    console.log("Color es: ", color);
}

// for (let i = 0; i < colores.length; i++) {
//     console.log("Color es: ",  colores[i]);
// }


// FOR IN
// RECORRE LAS KEY(LLAVES) de cada objeto
for (const color in colores) {
    // console.log("Color es: ",  color);
}

const persona = {
    nombre: "Maria",
    edad: 28,
    ciudad: "La plata"
}

// persona.nombre
// persona["nombre"]

for (const clave in persona) {
    
    // console.log("La clave es: ", clave);
    // console.log("El valor en la clave es: ", persona[clave]);
    
}

const numerosNuevos = [1, 2, 3, 4, 5, 6, 7]

numerosNuevos.forEach(num => {
    console.log("El numero es: ", num);
});

const doble = numerosNuevos.map( num => num * 2)

console.log(doble);
