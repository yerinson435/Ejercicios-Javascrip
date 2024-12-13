// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

function sumaPositivos(numeros) {
    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            suma += numeros[i];
        }
    }
    
    return suma;
}

console.log(sumaPositivos([1, -2, 3, -4, 5]));  // Devuelve 9
console.log(sumaPositivos([-1, -2, -3, -4]));   // Devuelve 0