// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

let mes = prompt('Ingrese el nombre del mes:').toLowerCase();

let signo = '';

if (mes === 'enero' || mes === 'febrero') {
    if (mes === 'enero') {
        signo = 'Capricornio o Acuario';
    } else if (mes === 'febrero') {
        signo = 'Acuario o Piscis';
    }
} else if (mes === 'marzo' || mes === 'abril') {
    if (mes === 'marzo') {
        signo = 'Piscis o Aries';
    } else if (mes === 'abril') {
        signo = 'Aries o Tauro';
    }
} else if (mes === 'mayo' || mes === 'junio') {
    if (mes === 'mayo') {
        signo = 'Tauro o Géminis';
    } else if (mes === 'junio') {
        signo = 'Géminis o Cáncer';
    }
} else if (mes === 'julio' || mes === 'agosto') {
    if (mes === 'julio') {
        signo = 'Cáncer o Leo';
    } else if (mes === 'agosto') {
        signo = 'Leo o Virgo';
    }
} else if (mes === 'septiembre' || mes === 'octubre') {
    if (mes === 'septiembre') {
        signo = 'Virgo o Libra';
    } else if (mes === 'octubre') {
        signo = 'Libra o Escorpio';
    }
} else if (mes === 'noviembre' || mes === 'diciembre') {
    if (mes === 'noviembre') {
        signo = 'Escorpio o Sagitario';
    } else if (mes === 'diciembre') {
        signo = 'Sagitario o Capricornio';
    }
} else {
    signo = 'Mes no válido';
}

alert(`El signo zodiacal correspondiente es: ${signo}`);