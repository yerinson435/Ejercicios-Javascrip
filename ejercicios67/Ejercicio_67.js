// 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido.

let numero = parseInt(prompt("Ingrese un número entero:"));

for (let i = 1; i <= numero; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "*";
    }
    console.log(linea);
}
