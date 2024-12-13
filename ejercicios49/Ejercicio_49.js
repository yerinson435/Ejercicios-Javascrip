// 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado

let lado1 = parseInt(prompt("Ingrese el primer lado del rectángulo:"));
let lado2 = parseInt(prompt("Ingrese el segundo lado del rectángulo:"));

if (lado1 > 0 && lado2 > 0) {
    let area = lado1 * lado2;
    alert(`El área del rectángulo es: ${area}`);
} else {
    alert("Los lados deben ser números positivos.");
}