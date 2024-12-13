//Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//cortas menores de 5 caracteres).

function longitudPalabra(palabra) {
    let longitud = palabra.length;
    if (longitud < 5) {
        return "Palabra corta";
    } else {
        return "Palabra larga";
    }
}

let resultado = longitudPalabra("Hola");
console.log(resultado);  

resultado = longitudPalabra("Programación");
console.log(resultado); 

