// En una determinada empresa, sus empleados son evaluados al final de cada año. Los
// puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
// traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados
// pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
// A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.
// a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
// puntuación del nivel.
// b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
// Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
// así como la cantidad de dinero que recibirá el usuario.

function evaluarEmpleado() {
    const puntuacion = parseFloat(prompt('Ingrese su puntuación (0.0, 0.4, 0.6 o más)'));
    const dineroBase = 2400;
    let nivel = '';
    let dinero = 0;

    if (puntuacion === 0.0) {
        nivel = 'Inaceptable';
    } else if (puntuacion === 0.4) {
        nivel = 'Aceptable';
    } else if (puntuacion >= 0.6) {
        nivel = 'Meritorio';
    } else {
        return alert('Puntuación no válida.');
    }

    dinero = dineroBase * puntuacion;

    alert(`Nivel de rendimiento: ${nivel}\nDinero recibido: ${dinero}€`);
}

evaluarEmpleado();
