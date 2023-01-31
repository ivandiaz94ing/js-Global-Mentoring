class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido
    }

    get nombre (){
        return this._nombre
    }

    set nombre (nombrevar){
        this._nombre = nombrevar;
    }

    get apellido (){
        return this._apellido;
    }

    set apellido (apeVar){
        this._apellido = apeVar;
    }

}