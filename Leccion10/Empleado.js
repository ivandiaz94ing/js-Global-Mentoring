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
