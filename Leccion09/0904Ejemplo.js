class Persona {

    static contadorPersona =  0; 
    
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this._nombre = nombre;
            this._apellido = apellido;
            this.id = ++Persona.contadorPersona;
            Persona.contadorObjetosPersona ++;

        }else{
            console.log('La version gratuita solo permite crear maximo 5 personas');
        }
        
    }

    get nombre (){
        return this._nombre;
    }

    set nombre (nombrevar){
        this._nombre = nombrevar;
    }

    get apellido (){
        return this._apellido;
    }

    set apellido (apellidovar){
        this._apellido = apellidovar;
    }

    nombreCompleto(){
        return this.id + ' ' + this._nombre+ ' ' + this._apellido;
    }

    //Sobreescritura del metodo toString
    toString(){
        return this.nombreCompleto();
    }
}

//CREACION DE LA CLASE HIJA
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento (){
        return this._departamento;
    }

    set departamento (departamentovar){
        this._departamento = departamentovar;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento
    }
}

let persona1 = new Persona('Rafael', 'Diaz');
let persona2 = new Empleado('Yandy', 'Liliana', 'Docencia');
let persona3 = new Empleado('Marina', 'Rosso','Ama de Casa');
let persona4 = new Persona('Monica', 'Diaz');
let persona5 = new Persona('Ivan', 'Diaz');
let persona6 = new Persona('Isabel', 'Diaz');

console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
console.log(persona4.toString());
console.log(persona5.toString());
console.log(persona6.toString());


