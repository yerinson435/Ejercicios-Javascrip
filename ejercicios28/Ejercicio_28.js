// 28. Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let nombre = prompt("Ingrese su nombre:");
let horas = parseFloat(prompt("Ingrese las horas trabajadas:"));
let pagoHora = parseFloat(prompt("Ingrese el pago por hora:"));

let sueldo = horas * pagoHora;

alert(`${nombre}, su sueldo es: ${sueldo}`);