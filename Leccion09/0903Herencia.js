class Persona {

    static contadorObjetosPersona =  0; //atributo de nuestra clase
    email = 'Email por default'; //atributo de nuestros objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona ++;

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
        return this._nombre+ ' ' + this._apellido;
    }

    //Sobreescritura del metodo toString
    toString(){
        return this.nombreCompleto();
    }

    //Creacion de un metodo estatico
    static saludar(){
        console.log('Hola como vas?...');
    }

    static saludar2(persona){
        console.log('Hola ' + persona.nombre + ' como estas?.');
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

console.log(persona1);
console.log( persona2 );

//En este caso estamos viendo el polimorfismo ya que el metodo toString
// llama al metodo nombreCompleto y este dependiendo del tipo de objeto realiza cosas diferentes, en
//este caso si llamamos al metodo de la clase hija este retorna una nueva propiedad aparte de las que 
//se imprimen desde el objeto padre.

console.log(persona1.toString());
console.log(persona2.toString());

//Metodos Estaticos
//persona1.saludar();
//Los metodos estaticos no se relacionan con los objetos sino con las clases
Persona.saludar();
Empleado.saludar2(persona2);

console.log(Persona.contadorObjetosPersona);

console.log(persona1.email);
console.log(persona2.email);
console.log(Persona.email);
console.log(Empleado.email);
