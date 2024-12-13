// 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.

let precio = parseInt(prompt('Ingrese el precio total de la compra de helado:'));
let membresia = prompt('Ingrese el tipo de membresía (A, B o C):').toUpperCase();
let descuento = 0;

if (membresia === 'A') {
    descuento = 0.10;  
} else if (membresia === 'B') {
    descuento = 0.15;  
} else if (membresia === 'C') {
    descuento = 0.20;  
} else {
    alert('Tipo de membresía no válido.');
}

let totalConDescuento = precio - (precio * descuento);

alert(`El total de la compra con el descuento es: ${totalConDescuento}`);