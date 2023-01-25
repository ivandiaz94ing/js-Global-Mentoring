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