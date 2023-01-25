class Persona {

    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        
        this._id = ++Persona.contadorPersona; 
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }
    get id (){
        return this._id;
    }

    get nombre (){
        return this._nombre;
    }

    set nombre (nombreVar){
        this._nombre = nombreVar;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido (apellidoVar){
        this._apellido = apellidoVar;
    }

    get edad (){
        return this._edad;
    }

    set edad (edadVar){
        this._edad = edadVar;
    }

    toString (){
        return this.id + ', ' + this._nombre + ', ' + this._apellido + ', ' + this._edad
    }
}

let persona1 = new Persona('Rafael', 'Diaz', 59);
console.log(persona1.toString());


