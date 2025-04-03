// CALLBACKS:
// Es una funcion que se pasa como parametro a otra funcion
// Es una funcion que se usa como argumento
function saludar(nombre, callback){
    console.log("Hola ", nombre)
    callback()
    // la funcion saludar, toma como parametro cualquier funcion, y en este caso se le paso despedir
}

function despedir(){
    // No tiene nada de especial
    console.log("Adios");
}

// saludar("Manuel", despedir)


// setTimeout: Simula tareas asincronicas

// console.log("Inicio de programa");

// setTimeout(() => {
//     console.log("Me quede esperando");
    
// }, 2000);

// console.log("Fin del programa")

// CALLBACKS ANINADOS, 
// Simula pedir datos de a uno, pero se vuelve un poco dificil de pedir

function obtenerUsuario(id, callback){
    console.log("Buscando usuario...");
    setTimeout(() => {
        console.log(`Se encontro el usuario de ID ${id}`);
        callback()
    }, 1000);
}

function llamadoUsuarios(){
    obtenerUsuario(1, () => {
        obtenerUsuario(2, () => {
            obtenerUsuario(3, () => {
                console.log("Todos los usuarios fueron encontrados");
                
            })
        })
    })
}
// SE CONOCE COMO CALLBACK HELL
// llamadoUsuarios()

// Callbacks en funciones de arrays:


const numeros = [1, 2, 3]

numeros.forEach(num => {
    // console.log("Numero: ", num);
    
})

const dobles = numeros.map(num => {
    return num * 2
})

// console.log("dobles: ", dobles);

const mayoresA1 = numeros.filter(num => num > 1)
// console.log("Los mayores a 1 son: ", mayoresA1);

// Una funcion callback reutilizable

function ejecutarOperacion(num1, num2, callback){
    const resultado = callback(num1, num2)
    console.log(`El resultado de la operacion ${callback} da igual a ${resultado}.`);
}

ejecutarOperacion(2, 7, (num1, num2) => num1 + num2)
ejecutarOperacion(2, 7, (num1, num2) => num1 - num2)
ejecutarOperacion(2, 7, (num1, num2) => num1 * num2)


/// Porque usar callbacks
// Permiten delegar tareas a otras funciones
// Se usan mucho en operaciones asincronicas


// Porque no usarlos
// Se pueden convertir en dificiles de leer


// Hay alternativa?
// Si, la alternativa son las promesas


