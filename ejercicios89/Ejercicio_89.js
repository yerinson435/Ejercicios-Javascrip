// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este número es par o impar.

function verificarParImpar() {
    let numero = Math.floor(Math.random() * 10) + 1;
    if (numero % 2 === 0) {
        console.log(`${numero} es par.`);
    } else {
        console.log(`${numero} es impar.`);
    }
}

verificarParImpar();