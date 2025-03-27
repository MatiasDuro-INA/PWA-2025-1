
// Funcion Declarada
// Se puede invocar antes de su declaracion, por hoisting



// se declara la funcion - se asigna el nombre - entre parentesis, van los parametros
function saludar(nombre){
    // console.log("Hola " + nombre);
}
let nombre = "Matias"
saludar(nombre)

function sumar(a,b){

    console.log(a + b);
    
    return a + b 
}

let resultado 

// console.log(resultado);



function multiplicar(a,b, nombre){

    // return "el resultado de " + nombre + " es: " + ( a * b + 5)
    return a * b
}

// console.log(multiplicar(2,3, nombre))
// console.log(resultado);

const despedir = function(nombre){

    return "Adios " + nombre
}

// console.log(despedir(nombre))

let usuario = {
    nombre: "Matias",
    despedir
}

// Funcion Flecha, o arrow function

// Tiene la peculiaridad, que se sobreetiende, que si todo esta en la misma linea
// El return es implicito

const sumar2 = (a,b) => a + b

// console.log("La suma es: ", sumar2(5, 7));

let nombreCompleto = "Matias Duro"

const persona = {
    nombrePersona: nombreCompleto,
    edad: 29,
    saludar: function(){
        // return "Hola, soy " + nombreCompleto
        return `Hola, soy ${this.nombrePersona}`
    },
    decirEdad: function(){
        return `Hola, tengo ${this.edad}`
    },
    adios: () => `Adios ${this.nombrePersona}` // This no funciona en arrow function
}

// console.log(persona.adios());



let result = {};

const operaciones = (a,b, result) => {
    result.suma = sumar(a, b)
    result.multiplicar = multiplicar(a, b)
}

operaciones(5, 3, result)

console.log(result);
