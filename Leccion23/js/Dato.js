class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion ;
        this._valor = valor;
    }
    get descripcion (){
        return this._descripcion;
    }

    set descripcion (texto){
        this._descripcion = texto;
    }

    get valor(){
        return this._valor;
    }

    set valor (valorVar){
        this._valor = valorVar;
    }
}