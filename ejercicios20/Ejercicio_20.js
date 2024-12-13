// 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante.

let a = parseFloat(prompt('Ingrese el valor de a:'));
let b = parseFloat(prompt('Ingrese el valor de b:'));
let c = parseFloat(prompt('Ingrese el valor de c:'));

let discriminante = b * b - 4 * a * c;

if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert(`Raíces: x1 = ${x1}, x2 = ${x2}`);
} else if (discriminante === 0) {
    let x = -b / (2 * a);
    alert(`Raíz única: x = ${x}`);
} else {
    alert('No tiene raíces reales.');
}