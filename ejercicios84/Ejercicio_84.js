// Genera un patrón de asteriscos en forma de pirámide.

function piramideAsteriscos(filas) {
    for (let i = 1; i <= filas; i++) {
        let espacios = ' '.repeat(filas - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos);
    }
}

piramideAsteriscos(5);