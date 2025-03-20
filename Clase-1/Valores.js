

// Valores

// Strings / cadenas de texto
let texto = "Hola Clase"
// console.log("Texto: ", typeof texto);

// number
let numeroEntero = 42;
// console.log("numeroEntero: ",typeof numeroEntero);

// number
let numerosDecimales = 3.14
// console.log("numerosDecimales: ",typeof numerosDecimales);

// Booleanos 
let verdadero = false
// console.log("verdadero: ",typeof verdadero);

let noDefinida 
// console.log("noDefinida: ",typeof noDefinida);

// nada, en este caso null, nos marca un objecto. Porque para javascript, todo es un objecto
let nada = null
// console.log("noDefinida: ",typeof nada);


//  array indice   [0, 1, 2, 3, 4, 5, 6]
let arrayEjemplo = [1, 2, "Fruta", [5, 6, 7], true, false, numeroEntero]

// console.log("arrayEjemplo: ",typeof arrayEjemplo);

let usuarios = [["Matias", "Duro", "INA"], "Diego", "Evelyn"]

// console.log("El array contiene: ", usuarios[0][1]);

let materias = ["PWA", "Web"]

    // Objetos se basan en Clave (key) : Valor (value)
const usuario = {
    nombre: "Matias",
    apellido: "Duro",
    edad: 30,
    activo: verdadero,
    materias,
    ["Fecha Nacimiento"]: "16/10"
}
console.log("Usuario: ", usuario);
// console.log("Usuario: ", usuario["nombre"]);
// console.log("Usuario: ", usuario["Fecha Nacimiento"]);

usuario.apellido = "Carmona"

console.log("Usuario: ", usuario);

usuario.admin = true

console.log("Usuario: ", usuario);





