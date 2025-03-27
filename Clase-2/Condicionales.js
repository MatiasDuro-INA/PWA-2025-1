

let edad = 28

// IF, ELSE IF, ELSE

// if(edad < 18){
//     console.log("Eres Menor de edad");
    
// } else if(edad <= 25){
//     console.log("Todavia eres menor de 25");
// }else if(edad <= 26){
//     console.log("Todavia eres menor de 26");
// }else if(edad <= 27){
//     console.log("Todavia eres menor de 27");
// } else if(edad <= 30){
//     console.log("Todavia eres menor de 30");
// }else{
//     console.log("Eres mayor de edad");
// }


// Operador Ternario
// Una forma mas facil, y resumida, de un if y else

edad = 49 
// En el if ternario, se determinan el if con "?" y el else con ":"
let licencia = edad >= 18 ? "Permitido" : "Denegado"

let licenciaEspecial = edad <= 18 ? "Denegado" : edad <= 21 ? "Permitido con tutor" : "Permitido total"

// console.log(licenciaEspecial)


// Operador Logico "&&"

let permiso

permiso && console.log("Permitido");


// Operador ??

// Solo considera null o undefined, como valores vacios

let username = "Martin"
// console.log("Bienvenido: ", username ?? "Desconocido");

if(username !== "Matias"){
    console.log("Bienvenido Matias");
}else{
    console.log("No eres Matias");
}


// Validar si accedemos a propiedades que todavia no existen o que no existen directamente

const user = {
    nombre: "Matias",
    activo: true,
}

console.log(user);

setTimeout(() => {
    user.direccion ={
        calle: {
            nombre: "La plata",
            piso: 7
        },
        altura: 632,
    }
}, 2000);

console.log('La direccion es: ', user.direccion?.calle.nombre);


setTimeout(() => {
    console.log('La direccion es: ', user?.direccion.calle.nombre);

}, 4000);



