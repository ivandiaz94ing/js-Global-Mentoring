
console.log(miFuncion(21, 7));

//Declaracion de la funcion
function miFuncion(a, b) {
    let suma = a + b;
    return suma;

}

//LLamada a la funcion
console.log(miFuncion(5, 7));


//Declaracon Funcion de tipo Anonima
let sumar = function (a, b) { return a + b }
resultado = sumar(1, 5);
console.log(resultado);

//Funcion Self Invoking
(function (a, b) {
    console.log('Ejecutandose la funcion: ' + (a + b))
}(5, 89))


//Funciones Flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(2, 9);
console.log(resultado);


//Parametros y Argumentos

let restar = function (a = 30, b = 15) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a - b - arguments[2];
};

resultado = restar(20, 12, 2);
console.log(resultado);


//EJEMPLO DE SUMAR TODO

let sumarTodo = sumar2(1, 7, 8, 9, 15, 29, 49);

function sumar2() {
    let resul = 0;

    for (let p = 0; p < arguments.length; p++) {

        resul +=  arguments[p];
    }
    console.log(resul);
}


//Tipos primitivos
let x = 10;

function cambiarValor (a){
    a = 20;
}
//PASO POR VALOR
cambiarValor(x);
console.log(x);

//PASO POR REFERENCIA
const persona = {
    nombre:  'Ivan',
    apellido:  'Diaz'
}

function cambiarValorObjeto (p1){
    p1.nombre = 'Rafael';
    p1.apellido = 'Rumbo';

}

cambiarValorObjeto( persona );
console.log(persona);