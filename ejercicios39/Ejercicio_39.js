// 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.


let precio = parseFloat(prompt('Ingrese el precio por m:'));
let area = parseFloat(prompt('Ingrese el área en m a pintar:'));
let total = precio * area;

alert(`El costo total del trabajo es $${total.toFixed(2)}.`);