// 38. Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena?

let total = parseInt(prompt('Ingrese el total de tapas recolectadas:'));
let martin = (2 / 3) * total;
let jairo = (1 / 4) * total;
let lorena = total - (martin + jairo);

alert(`A Lorena le corresponden ${lorena} tapas.`);