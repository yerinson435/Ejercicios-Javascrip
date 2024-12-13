// 43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

let frase = prompt("Ingrese una frase entre comillas dobles");

let regex = /"((?:[^"\\]|\\.)*)"/;

if (regex.test(frase)) {
    alert("La frase entre comillas es válida.");
} else {
    alert("La frase no es válida.");
}