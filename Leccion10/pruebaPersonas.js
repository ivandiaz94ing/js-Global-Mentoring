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


class Empleado extends Persona{

    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this.idEmpleado = Persona.contadorPersona;
        this._sueldo = sueldo;
        Empleado.contadorEmpleados ++;
    }
    get id (){
        return this.idEmpleado;
    }

    get sueldo () {
        return this._sueldo;
    }

    set sueldo (sueldoVar){
        this._sueldo = sueldoVar;
    }

    //sobreescribiendo el método toString
    toString(){
        return super.toString() + ', ' + this._sueldo;
    }

}

let empleado1 = new Empleado('Monica', 'Diaz', 34, 2500000);
console.log(empleado1.toString());
console.log(Empleado.contadorEmpleados);

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._idCliente = Persona.contadorPersona;
        this._fechaRegistro = new Date();
        Cliente.contadorClientes ++;
    }
    get id (){
        return this._idCliente;
    }

    get fechaRegistro (){
        return this._fechaRegistro;
    }

    set fechaRegistro (fecha){
        this._fechaRegistro = fecha; 
    }

    toString(){
        return super.toString() + ', ' + this._fechaRegistro;
    }
}

let cliente1 = new Cliente('Alexander', 'Rosso', 48);
let cliente2 = new Cliente('Deivis', 'Meneses', 47);

console.log(cliente1.toString());
console.log(cliente2.toString());
console.log(Cliente.contadorClientes);