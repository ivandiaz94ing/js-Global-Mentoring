let resultado = ' ';

try {
    if (isNaN(resultado) )throw 'La variable resultado no es un numero';
    else if(resultado === ' ') throw 'La variable es una cadena vacia';
   else if(resultado >= 0) throw 'La variable es un numero positivo';
    else if(resultado < 0) throw 'La variable es un numero negativo';

    
} catch (error) {
    console.log(error);
}
console.log(resultado);