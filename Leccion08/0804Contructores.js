//Funcion constructor de objetos de tipo Persona

function Persona (nombre, apellido, edad ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    }
}

let padre = new Persona('Rafael', 'Diaz', 57);
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Marina', 'Rosso', 56);
console.log(madre);
console.log(madre.nombreCompleto());

padre.edad = 59;
console.log(padre);
console.log(madre);

//DISTINTAS FORMAS DE CREAR OBJETOS
let objeto = new Object();
let objeto1 = {};

let miCadena = new String('Hola mundo con JAVASCRIPT');
let miCadena1 = 'Hola mundo con Javascript';

let miNumero = new Number(1);
let miNumero1 = 2;

let miArreglo = new Array();
let miArreglo1 = [];

let miFuncion = new Function();
let miFuncion1 = function(){}



