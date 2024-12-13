// 12. Escribir un programa que calcule el área de un rectángulo:

function area() {
    const l = parseInt(prompt('Largo:'));
    const a = parseInt(prompt('Ancho:'));

    if (l > 0 && a > 0) {
        alert(`Área: ${l * a}`);
    } else {
        alert('Solo números positivos.');
    }
}

area();