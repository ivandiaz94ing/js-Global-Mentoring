//TIPO DE DATOS STRING
var nombre = "Ivan";
console.log(nombre);

let apellido = "Diaz";
console.log(apellido)

//TIPO DE DATOS NUMERICO
var numero = 5;
console.log(5);

//TIPO DE DATOS OBJECT
var objeto = {
    nombre : "Ivan",
    apellido : "Diaz",
    edad : 5,
    telefono : "3187524030"
}
console.log(objeto);
console.log(typeof objeto);

//TIPO DE VARIABLE BOOLEAN (True, False)
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

//TIPO DE DATOS FUNCION
function mifuncion(){}
console.log(mifuncion);
console.log(typeof mifuncion);

//TIPO DE DATOS SYMBOL

var simbolo = Symbol("mi sombolo");
console.log(simbolo);
console.log(typeof simbolo);

//TIPO DE CLASE ES UNA FUNCION
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

    }

}
console.log(Persona);
console.log(typeof Persona);


//TIPO DE DATO UNDEFINED
var x;
console.log(x)
console.log(typeof x)

//null  = es una cuando los programadores declaran las variables como nula
var y = null;
console.log(y);
console.log(typeof y);
