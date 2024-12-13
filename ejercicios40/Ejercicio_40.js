// 40. Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

let añoNacimiento = parseInt(prompt('Ingrese el año de nacimiento:'));
let añoActual = 2024; 
let edad = añoActual - añoNacimiento;

alert(`La edad de la persona es ${edad} años.`);