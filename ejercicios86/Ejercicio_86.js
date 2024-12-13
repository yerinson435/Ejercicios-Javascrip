// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

function sumaEnBinario(num1, num2) {
    const suma = num1 + num2;
    return suma.toString(2);
}

console.log(sumaEnBinario(5, 3));  
console.log(sumaEnBinario(10, 7)); 