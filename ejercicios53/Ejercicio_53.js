// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

let productos = [];
let subtotal = 0;

for (let i = 0; i < 5; i++) {
    let precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}:`));
    productos.push(precio);
    subtotal += precio;
}

let iva = subtotal * 0.19;  
let total = subtotal + iva;

alert(`Subtotal: $${subtotal.toFixed(2)}`);
alert(`iva (19%): $${iva.toFixed(2)}`);
alert(`Total de la compra: $${total.toFixed(2)}`);