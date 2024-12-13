// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

let p1 = parseFloat(prompt("Precio producto 1:"));

let p2 = parseFloat(prompt("Precio producto 2:"));

let p3 = parseFloat(prompt("Precio producto 3:"));

let p4 = parseFloat(prompt("Precio producto 4:"));


let p5 = parseFloat(prompt("Precio producto 5:"));

let total = (p1 * 0.95) + (p2 * 0.95) + (p3 * 0.98) + (p4 * 0.98) + p5;

alert(`Total a pagar: ${total}`);