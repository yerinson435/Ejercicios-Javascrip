// 68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(`Tabla de multiplicar del ${i}:`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("");  
}