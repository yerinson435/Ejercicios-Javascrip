// Crea una función de nos devuelva el elemento mayor de un arreglo de números.

function obtenerMayorElemento(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}