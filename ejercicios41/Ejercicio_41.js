// 41. Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida.


let frase = prompt('Ingrese una frase que lo identifique como programador de Software:');

let fraseInvertida = frase.split('').reverse().join('');

alert(`Frase invertida: ${fraseInvertida}`);