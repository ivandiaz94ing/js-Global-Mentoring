class DispositivoEntrada {
    constructor( tipoEntrada, marca ){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada () {
        return this._tipoEntrada;
    }
    set tipoEntrada (tipo) {
        this._tipoEntrada = tipo;
    }

    get marca () {
        return this._marca;
    }

    set marca (marcaVar){
        this._marca = marcaVar;
    }

}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca)
        this._idRaton = ++ Raton.contadorRatones;
    }

    get idRaton () {
        return this._idRaton;
    }

    toString(){
        return `ID: ${this._idRaton}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 9;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca)
        this._idTeclado = ++ Teclado.contadorTeclados;
    }
    toString(){
        return `ID: ${this._idTeclado}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Monitor {
    static contadorMonitores =  19;

    constructor(marca, tamaño) {
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca  = marca;
        this._tamaño = tamaño;
    }

    get idMonitor (){
        return this._idMonitor;
    }

    get marca (){
        return this._marca;
    }
    
    get tamaño ( ) {
        return this._tamaño;
    }

    set marca (marcaVar){
        this._marca = marcaVar;
    }

    set tamaño (tamañoVar){
        this._tamaño = tamañoVar;
    }

    toString ( ) {
        return `ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`;
    }
}

class Computadora {
    static contadorComputadoras = 29;
    
    constructor(nombre, monitor, raton, teclado, precio) {
        this._idComputador = ++ Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
        this._precio = precio;

    } 
    get  idComputadora (){
        return this._idComputador;
    }

    get nombre (){
        this._nombre;
    }

    get precio () {
        return this._precio;
    }

    set nombre (nombreVar){
        this._nombre = nombreVar;
    }

    set precio (precioVar){
        this._precio = precioVar;
    }

    toString(){
        return `Computadora ${this._idComputador}: ${this._nombre}, Precio: $${this._precio} \nMonitor: [${this._monitor}] \nTeclado: [${this._teclado}] \nRaton: [${this._raton}] \n`;
    }
}


class Orden {
    static contadorOrdenes = 999;
    tatalVenta = 0;
    constructor() {
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadores = [ ];
    }

    get idOrden () {
        return this._idOrden;
    }

    agregarComputadora (computadora){
        this._computadores.push(computadora);
    }

    mostrarOrden ( ) {
        
        let productosOrden = ' ';

        for (let computador of this._computadores) {
            this.tatalVenta += computador.precio;
            productosOrden += '\n'+ computador.toString();
        }
        console.log(`Factura N° : ${this._idOrden} ${productosOrden}`);
        console.log(`Total a pagar: $${this.tatalVenta}`)
    }
}





let dipositivo1 = new DispositivoEntrada('USB', 'Genius');
console.log(dipositivo1);

let raton1 = new Raton('USB', 'TOSHIBA');
let raton2 = new Raton('Bleutooth', 'DELL');

console.log(raton1.toString());
console.log(raton2.toString());

let monitor1 = new Monitor('HP', 'Mediano');
console.log(monitor1.toString());

let teclado1 = new Teclado('USB', 'GENIUS');
console.log(teclado1.toString());


let computadora1 = new Computadora('Asus', monitor1, raton1, teclado1, 3000000);
let computadora2 = new Computadora('HP', monitor1, raton2, teclado1, 2800000);
let computadora3 = new Computadora('DELL', monitor1, raton1, teclado1, 2600000);
let computadora4 = new Computadora('ACER', monitor1, raton2, teclado1, 2700000);
//console.log(computadora1.toString());

let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora4);

orden1.mostrarOrden();
orden2.mostrarOrden();

