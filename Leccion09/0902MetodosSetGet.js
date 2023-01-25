class Persona {

    constructor(nombre, apellido){
        this._nombre = nombre;
        this.apellido = apellido;

    }
    get nombre (){
        return this._nombre;
    }

    set nombre (nombrevar){
        this._nombre = nombrevar;
    }
}
let persona1 = new Persona('Marina', 'Rosso');
console.log(persona1);
persona1.nombre= 'Marina Isabel';
console.log(persona1.nombre);