// 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let cantidadInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingrese el interés anual en porcentaje:"));
let numeroAnios = parseInt(prompt("Ingrese el número de años:"));

for (let i = 1; i <= numeroAnios; i++) {
    cantidadInvertir += cantidadInvertir * (interesAnual / 100);
    console.log(`Año ${i}: $${cantidadInvertir.toFixed(2)}`);
}