// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

function invertirSignos(numeros) {
    return numeros.map(num => -num);
}

console.log(invertirSignos([1, -2, 3, -4, 5])); 