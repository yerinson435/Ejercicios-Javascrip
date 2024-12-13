// Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

function mayorDeDos(num1, num2) {
    let mayor;
    if (num1 > num2) {
        mayor = num1;
    } else {
        mayor = num2;
    }
    return mayor;
}


let resultado = mayorDeDos(8, 12);
console.log(resultado); 