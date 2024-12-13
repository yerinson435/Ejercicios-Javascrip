// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.

function contarSilabas(palabra) {
    let silabas = palabra.match(/[aeiouáéíóú]/gi);
    return silabas ? silabas.length : 0;
}

function contarSilabasEnFrase(frase) {
    let palabras = frase.split(' ');
    palabras.forEach(palabra => {
        let numSilabas = contarSilabas(palabra);
        console.log(`La palabra "${palabra}" tiene ${numSilabas} sílaba(s).`);
    });
}

let frase = "Hola como estas";
contarSilabasEnFrase(frase);