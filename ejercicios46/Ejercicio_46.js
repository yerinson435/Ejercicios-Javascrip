// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

let mayor = num1;

if (num2 > mayor) {
    mayor = num2;
}
if (num3 > mayor) {
    mayor = num3;
}

alert(`El mayor número es: ${mayor}`);