// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

let edadMadre = parseInt(prompt("Ingrese la edad actual de la madre:"));
let edadHijo = parseInt(prompt("Ingrese la edad actual del hijo:"));

let edadAlDarALuz = edadMadre - edadHijo;

alert(`La madre tenía ${edadAlDarALuz} años cuando dio a luz.`);