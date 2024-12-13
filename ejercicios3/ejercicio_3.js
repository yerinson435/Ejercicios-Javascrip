// Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

function divicion() {
    let num1 = parseInt(prompt("Ingrese el dividendo"));
    let num2 = parseInt(prompt("Ingrese el divisor"));

    if (num2 === 0) {
        alert("El divisor es cero no se puede hacer");
    } else {
        let resultado = num1 / num2;
        alert(`${num1} / ${num2} = ${resultado}`);
    }
}

divicion();