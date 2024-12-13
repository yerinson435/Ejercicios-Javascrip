// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo):").toLowerCase();
let horasTrabajadas = parseInt(prompt("Ingrese el total de horas trabajadas:"));

let pagoPorHora;
if (tipoEmpleado === "planta") {
    pagoPorHora = 20000;
} else if (tipoEmpleado === "administrativo") {
    pagoPorHora = 10000;
} else {
    alert("Tipo de empleado no válido.");
    throw "Tipo de empleado no válido";
}

let pagoTotal = horasTrabajadas * pagoPorHora;

alert(`El pago total es: $${pagoTotal}`);