// 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo = parseFloat(prompt('Ingrese el saldo de su depósito:'));
let interes = 0;

if (saldo < 100000) {
    interes = saldo * 0.03;  
} else {
    interes = saldo * 0.04;  
}

let saldoFinal = saldo + interes;

alert(`El interés pagado es: ${interes}`);
alert(`El saldo final es: ${saldoFinal}`);