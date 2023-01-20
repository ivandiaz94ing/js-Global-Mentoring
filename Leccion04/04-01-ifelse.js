let numero = 5;

if (numero == 1) {
    console.log('Numero UNO');
} else {
    if (numero == 2) {
        console.log('Numero DOS');

    } else {
        console.log('Numero TRES');

    }
}

switch (numero) {
    case 1:
        console.log('Numero UNO');

        break;

    case 2:
        console.log('Numero DOS');

        break;

    case 3:
        console.log('Numero TRES');

        break;

    default:
        console.log('Numero Desconocido');
        break;
}
