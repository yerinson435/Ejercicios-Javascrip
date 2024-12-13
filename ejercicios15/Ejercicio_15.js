// 15. Escribir un programa que calcule la longitud y el área de una circunferencia.

let diametro = parseInt(prompt('Ingrese el diametro:'));

let longitud = diametro * 3.14;

alert(`La longitud de la circunferencia es de: ${longitud}`);

alert(`El area de la circunferencia es de: ${3.14 * Math.pow((diametro/2), 2)}`);
