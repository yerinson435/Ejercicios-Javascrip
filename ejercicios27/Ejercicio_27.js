// 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

let p1 = parseFloat(prompt("Primer parcial:"));

let p2 = parseFloat(prompt("Segundo parcial:"));

let p3 = parseFloat(prompt("Tercer parcial:"));

let ef = parseFloat(prompt("Examen final:"));

let tf = parseFloat(prompt("Trabajo final:"));

let promParciales = (p1 + p2 + p3) / 3;

let promFinal = (promParciales * 0.55) + (ef * 0.30) + (tf * 0.15);

alert(`Promedio final: ${promFinal}`);
