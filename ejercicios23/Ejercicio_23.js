// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.

let v = parseFloat(prompt('Ingrese la velocidad del automóvil (km/h):'));

let t = parseFloat(prompt('Ingrese el tiempo de viaje (horas):'));

let d = v * t;

alert(`La distancia recorrida es: ${d} km`);