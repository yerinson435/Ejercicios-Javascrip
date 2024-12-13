// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let consumo = parseFloat(prompt("Ingrese el total del consumo en el restaurante:"));

let descuento = 0;
if (consumo > 130000) {
    descuento = consumo * 0.15;
}

let totalPagar = consumo - descuento;

alert(`El total a pagar es: $${totalPagar}`);