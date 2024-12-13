// 57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.

let calificacion = parseFloat(prompt('Ingrese su calificación numérica:'));

let resultado = '';

if (calificacion >= 9.1 && calificacion <= 10) {
    resultado = 'A - Excelente';
} else if (calificacion >= 8.1 && calificacion < 9) {
    resultado = 'A - Muy bien';
} else if (calificacion >= 7.5 && calificacion < 8) {
    resultado = 'A - Bien';
} else {
    resultado = 'NA - No Aprobado';
}

alert(`Su calificación es: ${resultado}`);