// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

function quitarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, '');
}

console.log(quitarVocales("Hola Mundo"));  
console.log(quitarVocales("JavaScript")); 