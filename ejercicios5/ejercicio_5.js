// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no.

function verificarTributo() {
    const edad = parseInt(prompt("Cuántos años tienes"));

    if (edad <= 16) {
        return alert("No tienes que tributar.");
    }

    const ingresosMensuales = parseInt(prompt("Cuánto es tu ingreso mensual"));

    if (ingresosMensuales >= 1000) {
        alert("Tienes que tributar");
    } else {
        alert("No tienes que tributar");
    }
}

verificarTributo();