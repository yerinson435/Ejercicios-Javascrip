// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar.

function imparypar() {
    let value = parseInt(prompt("Escribe un número entero"));

    if (!isNaN(value)) {
        let resultado = (value % 2 === 0) ? `El numero ${value} es par` : `El numero ${value} es impar`;
        alert(resultado);
    } else {
        alert("Introduce un número válido, por favor");
    }
}

imparypar();