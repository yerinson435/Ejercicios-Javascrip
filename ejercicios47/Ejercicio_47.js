// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

if (num1 === num2 && num2 === num3) {
    alert("Los tres números son iguales.");
} else if (num1 > num2 && num1 > num3) {
    alert(`El mayor es ${num1} y el menor es ${Math.min(num2, num3)}`);
} else if (num2 > num1 && num2 > num3) {
    alert(`El mayor es ${num2} y el menor es ${Math.min(num1, num3)}`);
} else if (num3 > num1 && num3 > num2) {
    alert(`El mayor es ${num3} y el menor es ${Math.min(num1, num2)}`);
} else {
    alert("Existen dos números iguales.");
}