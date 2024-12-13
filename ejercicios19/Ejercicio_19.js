// 19. Escribir un programa que calcule el área y el volumen de un cilindro.

let r = parseInt(prompt('Radio:'));
let h = parseInt(prompt('Altura:'));
alert(`Área: ${(2 * 3.14 * r * h) + (2 * 3.14 * Math.pow(r, 2))}`);
alert(`Volumen: ${3.14 * Math.pow(r, 2) * h}`);