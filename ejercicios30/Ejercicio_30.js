// 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.

let password = prompt("Ingresa tu contraseña:");

let longitud = password.length;
let tieneMayuscula = /[A-Z]/.test(password);
let tieneMinuscula = /[a-z]/.test(password);
let tieneDigito = /\d/.test(password);

if (longitud >= 8 && longitud <= 12 && tieneMayuscula && tieneMinuscula && tieneDigito) {
    alert("La contraseña fuerte");
} else {
    alert("La contraseña no es fuerte");
}