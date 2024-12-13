// 44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda.

let pesos = parseFloat(prompt("Ingrese la cantidad en pesos"));

const dolar = 5000; 
const euro = 5400;  

let dolares = pesos / dolar;
let euros = pesos / euro;

alert(`La cantidad en dolares es: ${dolares.toFixed(2)} usd`);
alert(`La cantidad en euros es: ${euros.toFixed(2)} eur`);