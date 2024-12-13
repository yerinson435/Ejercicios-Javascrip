// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es válido y false si no es válido.

function validarPin(pin) {
    const regex = /^[0-9]{4,6}$/;
    return regex.test(pin);
}