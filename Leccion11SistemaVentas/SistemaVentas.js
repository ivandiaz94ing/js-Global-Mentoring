class Producto {
    static contadorProductos = 0;
    
    
    constructor(nombre, precio){
        this._idProductos = ++ Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get id (){
        return this._idProductos;
    }

    get nombre (){
        return this._nombre;
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
        return `idProducto: ${this._idProductos}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }

}


class Orden{
    static contadorOrdenes = 0;
    
    static get MAX_PRODUCTOS ( ) {
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [ ];
        //this._contadorProductosAgregados = 0;
        
    }
    get idOrden () {
        this._idOrden;
    }

    agregarProductos (producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            
            //Agregar producto
            this._productos.push(producto);
            
            //Otra forma
            //this._productos[this._contadorProductosAgregados ++]  = producto; 
            
        } else {
            console.log('Ha alcanzado el tope maximo de productos');
        }


    }
    calcularTotal ( ) {
        let totalVenta = 0;
        for (let producto of  this._productos) {
            totalVenta += producto.precio; 
        }
        return totalVenta;
    }

    mostrarOrden ( ) {
        let productosOrden = ' '; 
        for (let producto of this._productos) {

            productosOrden += '\n'  + producto.toString() + ' ';
            
        }
        console.log( `Factura N°: ${this._idOrden} =>  Total a Pagar:  $${this.calcularTotal()} ${productosOrden}`)
    }
}

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);

console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);

console.log(orden1.mostrarOrden());

let orden2 = new Orden();
let producto3 = new Producto('Morral', 400);
let producto4 = new Producto('Canguro', 60);
let producto5 = new Producto('Casco', 350);
let producto6 = new Producto('Chaleco', 70);

orden2.agregarProductos(producto1);
orden2.agregarProductos(producto2);
orden2.agregarProductos(producto3);
orden2.agregarProductos(producto4);
orden2.agregarProductos(producto5);

console.log(orden2.mostrarOrden());