// 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.


let contraseña = "contraseña";
let intento;

do {
    intento = prompt("Introduce la contraseña:");
} while (intento !== contraseña);

console.log("Contraseña correcta");