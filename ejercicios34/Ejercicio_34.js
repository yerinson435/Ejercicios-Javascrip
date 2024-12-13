// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.

let r = parseFloat(prompt("Radio del depósito:"));
let h = parseFloat(prompt("Altura del depósito:"));
let q = parseFloat(prompt("Caudal en litros/seg:"));

let v = Math.PI * Math.pow(r, 2) * h * 1000;
let t = v / q / 60;

alert(`Tiempo estimado: ${t.toFixed(2)} minutos.`);