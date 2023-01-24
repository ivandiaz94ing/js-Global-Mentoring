//Funcion constructor de objetos de tipo Persona

function Persona (nombre, apellido, edad ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    }
}

//Otra forma de agregar una nueva propiedad a todos los objetos creados
Persona.prototype.telefono = '3135198063';

let padre = new Persona('Rafael', 'Diaz', 57);
console.log(padre);

console.log(padre.nombreCompleto());
console.log(padre.telefono);

let madre = new Persona('Marina', 'Rosso', 56);
console.log(madre);
madre.telefono = '3126697703';
console.log(madre)