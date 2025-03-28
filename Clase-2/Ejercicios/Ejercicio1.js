// Es Palindromo

function invertirTexto(texto){
    const palabra = texto
    // console.log(palabra)
    const palabraSeparada = palabra.split("")
    // console.log(palabraSeparada)
    const palabraInvertida = palabraSeparada.reverse()
    // console.log(palabraInvertida)
    const palabraUnida = palabraInvertida.join("")
    // console.log(palabraUnida)
    return palabraUnida
}

function esPalindromo(palabra){
    // console.log(palabra);
    let palindromos = []
    let normales =[]
    for (let index = 0; index < palabra.length; index++) {
        const element = palabra[index];
        // console.log(element)
        const palabraMinuscula = element.toLowerCase()
        // console.log(palabraMinuscula);
        
        const palabraInvertida = invertirTexto(palabraMinuscula)
        // console.log(palabraMinuscula);
        // console.log(palabraInvertida);
        
        
    if (palabraMinuscula === palabraInvertida) {
        // console.log("Palindromo", element);
        palindromos.push(element)
    }else{
        // console.log("No palindromo", element);
        normales.push(element)
        
    }
    }
return {palindromos, normales}
    

}


function VerificarPalindromo(){
    // Separen en 2 arrays, las palabras palindromos y las que no lo son
// usar === para verificar (no==)
    const resultado = esPalindromo(palabras)
// console.log(resultado);

    return resultado
}

const palabras = ["Sol", "Ana", "Hola", "Oso", "Neuquen", "Saludo", "Reconocer"]

const resultado = VerificarPalindromo(palabras)

console.log(resultado);
