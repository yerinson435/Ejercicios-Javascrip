// 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.

let exam1 = parseFloat(prompt("calificación del primer examen:"));
let exam2 = parseFloat(prompt("calificación del segundo examen:"));
let exam3 = parseFloat(prompt("calificación del tercer examen:"));
let exam4 = parseFloat(prompt("calificación del cuarto examen:"));

let promedio = (exam1 + exam2 + exam3 + exam4) / 4;

alert(`El promedio es: ${promedio}`);