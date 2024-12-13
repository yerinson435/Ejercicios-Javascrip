// escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña
// introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.

function valContra() {
    let contra = "yesu45789";
    let entrada = prompt("Ingrese la contraseña");
    let valTexto = /\w/;

    console.log(valTexto.test(entrada));

    if (valTexto.test(entrada)) {
        if (entrada.toLowerCase() === contra.toLowerCase()) {
            alert("Contraseña Correcta");
        } else 
            alert("Contraseña incorrecta");
        
    } else 
        alert("mal");
}

valContra();