// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

let num = parseInt(prompt("Introduce un número entero:"));
let esPrimo = true;

if (num < 2) {
    esPrimo = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(num + " es un número primo.");
} else {
    console.log(num + " no es un número primo.");
}