// Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
// * 5, nos debe mostrar el resultado para las demás multiplicaciones.

function generarTablaDeMultiplicar() {
    let numero = 5;
    for (let i = 1; i <= 10; i++) {
        if (i !== 5) {
            console.log(`${numero} * ${i} = ${numero * i}`);
        }
    }
}

generarTablaDeMultiplicar();