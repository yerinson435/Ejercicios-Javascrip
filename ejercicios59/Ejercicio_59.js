// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

let edad = parseInt(prompt('Ingrese la edad del postulante:'));
let estatura = parseFloat(prompt('Ingrese la estatura del postulante en cm:'));
let peso = parseFloat(prompt('Ingrese el peso del postulante en kg:'));

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    alert('El postulante cumple con los requisitos para la selección de basquetbol.');
} else {
    alert('El postulante NO cumple con los requisitos para la selección de basquetbol.');
}