
// Funcion

// nombre funcion = function("parametros"){
//    Contenido de la funcion
// } 

let mensaje
let saludo  = function(){
    // console.log("Iniciando funcion...");
    
    let mensaje = "Hola como estan"
    // console.log("Mensaje: ", mensaje);
    // console.log("Mensaje1: ", mensaje);

    return mensaje
    // return "Hola como estan"
}
// console.log("Mensaje2: ", mensaje);

let SaludarPersona = (amigo) => {

    let saludo = "Hola "

    // console.log("Variable Amigo es: ", amigo);
    

    return saludo + amigo
}

let amigo = "Evelyn"

let materias = {
    PWA: {
        activa: true,
        nota: 10,
        profesores: {
            nombre: "Matias"
        }
    },
    Programacion1: {
        activa: true,
        nota: null
    }
}


const usuario = {
    nombre: "Matias",
    activo: true,
    saludo: saludo,
    SaludarPersona,
    materias
}

// console.log("Usuario Saluda a: ", usuario.SaludarPersona(amigo));

console.log("Materias del usuario: ", usuario.materias.PWA.profesores);





// console.log("Saludo va a ser: ", mensaje);



// Formas de declarar una funcion

// Funcion Standart
const sum = function(a, b){
    return a + b
}

sum(20, 5)

// Funcion Flecha
const func2 = () => {

}
