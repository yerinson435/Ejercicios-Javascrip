// 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos.

function validaEdad() {
    let edad = prompt("Ingresa tu edad");
    let valida = /^[0-9]+$/;
    if (valida.test(edad)) {
        if (parseInt(edad) >= 18) {
            alert("Eres mayor de edad");
        } else {
            alert("Eres menor de edad");
        }
    }
}

validaEdad();

