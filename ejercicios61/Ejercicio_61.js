// 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

let numAlumnos = parseInt(prompt('Ingrese el número de alumnos:'));

let notaAlta = -1;
let notaBaja = 101;
let conteo100 = 0;
let conteoA = 0;
let conteoB = 0;
let conteoC = 0;
let conteoD = 0;

for (let i = 1; i <= numAlumnos; i++) {
    let nota = parseInt(prompt(`Ingrese la nota del alumno ${i}:`));

    if (nota > notaAlta) {
        notaAlta = nota;
    }
    if (nota < notaBaja) {
        notaBaja = nota;
    }

    if (nota === 100) {
        conteo100++;
    }

    if (nota >= 90 && nota < 100) {
        conteoA++;
    } else if (nota >= 80 && nota < 90) {
        conteoB++;
    } else if (nota >= 70 && nota < 80) {
        conteoC++;
    } else if (nota >= 60 && nota < 70) {
        conteoD++;
    }
}

alert(`Nota más alta: ${notaAlta}`);
alert(`Nota más baja: ${notaBaja}`);
alert(`Cantidad de alumnos con nota 100: ${conteo100}`);
alert(`Cantidad de alumnos con nota A (90-99): ${conteoA}`);
alert(`Cantidad de alumnos con nota B (80-89): ${conteoB}`);
alert(`Cantidad de alumnos con nota C (70-79): ${conteoC}`);
alert(`Cantidad de alumnos con nota D (60-69): ${conteoD}`);