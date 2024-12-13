// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

let costo = parseFloat(prompt('Ingrese el costo del medicamento:'));

let descuento = costo * 0.10;

let precioFinal = costo - descuento;


alert(`Descuento: $${descuento.toFixed(2)}`);

alert(`Precio final después del descuento: $${precioFinal.toFixed(2)}`);