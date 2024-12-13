// 7. los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.

function calcularImpuesto() {
    const rentaAnual = parseInt(prompt('cual es tu renta anual'));

    if (rentaAnual >= 10000 && rentaAnual <= 20000) {
        alert('Le toca el 5% de impositivo');
    } else if (rentaAnual > 20000 && rentaAnual <= 35000) {
        alert('Le toca el 10% de impositivo');
    } else if (rentaAnual > 35000 && rentaAnual <= 60000) {
        alert('Le toca el 20% de impositivo');
    } else if (rentaAnual > 60000) {
        alert('Le toca el 45% de impositivo');
    } else {
        alert('No aplica');
    }
}

calcularImpuesto();
