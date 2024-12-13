//54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//segundo, en caso contrario indicar con un mensaje que la operación no es posible
//realizarla.

let num1 = parseInt(prompt('Ingrese el primer número:'));
let num2 = parseInt(prompt('Ingrese el segundo número:'));

if (num1 > num2) {
    let resultado = num1 - num2;
    alert(`El resultado de la resta es: ${resultado}`);
} else {
    alert('La operación no es posible. El primer número debe ser mayor que el segundo.');
}