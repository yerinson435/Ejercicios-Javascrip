// 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let cuentaAtras = [];

for (let i = numero; i >= 0; i--) {
    cuentaAtras.push(i);
}

console.log(cuentaAtras.join(", "));