// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.

let m = parseInt(prompt('Minutos de la llamada:'));

let costo = m * 355;

let total = costo * 1.2;

alert(`Costo total: ${total}`);
