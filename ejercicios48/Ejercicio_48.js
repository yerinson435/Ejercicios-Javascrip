// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let figura = prompt("¿Qué figura desea calcular? Escriba T para Triángulo o C para Círculo:");

if (figura.toUpperCase() === 'T') {
    let base = parseInt(prompt("Ingrese la base del triángulo:"));
    let altura = parseInt(prompt("Ingrese la altura del triángulo:"));
    let area = (base * altura) / 2;
    alert(`El área del triángulo es: ${area}`);
} else if (figura.toUpperCase() === 'C') {
    let radio = parseInt(prompt("Ingrese el radio del círculo:"));
    let area = 3.14 * Math.pow(radio, 2);
    alert(`El área del círculo es: ${area}`);
} else {
    alert("Opción no válida. Escriba T para Triángulo o C para Círculo.");
}