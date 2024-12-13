// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

function pizza() {
    const tipo = prompt('Pizza vegetariana? (si/no):').toLowerCase();

    if (tipo === 'si' || tipo === 'no') {
        const veg = ['pimiento', 'tofu'];
        const noVeg = ['pepperoni', 'jamon', 'salmon'];
        const base = ['mozzarella', 'tomate'];
        const opciones = tipo === 'si' ? veg : noVeg;

        let extras = [];
        let continuar = true;

        while (continuar) {
            const ing = prompt(`Elige: ${opciones.join(', ')} o "fin":`).toLowerCase();
            if (opciones.includes(ing) && !extras.includes(ing)) extras.push(ing);
            else if (ing === 'fin') continuar = false;
            else alert('Inválido');
        }

        const tipoPizza = tipo === 'si' ? 'Veg' : 'No veg';
        alert(`Pizza ${tipoPizza}\nIngredientes: ${[...base, ...extras].join(', ')}`);
    } else {
        alert('Opción inválida');
    }
}

pizza();