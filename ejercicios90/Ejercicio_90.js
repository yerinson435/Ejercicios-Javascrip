// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function convertirANombre(numero) {
    let nombres = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    if (numero >= 0 && numero <= 5) {
        return nombres[numero];
    } else {
        return "Número fuera de rango";
    }
}

console.log(convertirANombre(0)); 
console.log(convertirANombre(3)); 
console.log(convertirANombre(5)); 
console.log(convertirANombre(6));