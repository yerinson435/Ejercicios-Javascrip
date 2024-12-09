// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.

let nombre = prompt("ingresa tu nombre")
let genero = prompt("ingresa tu genero es entre m y f")

nombre = nombre;
genero = genero;

if (nombre > "m" && genero == "f")
{
    alert("perteneces al grupo A")
}
else if (nombre < "n" && genero == "m")
{
    alert("perteneces al grupo B")
}
else{
    alert("no perteneces a ningun grupo")
}

