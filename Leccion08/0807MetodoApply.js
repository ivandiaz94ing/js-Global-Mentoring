let persona1 = {
    nombre: 'Ivan',
    apellido: 'Diaz',
    nombreCompleto: function(titulo, telefono) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' '+ telefono;
    }
}

let persona2 = {
    nombre: 'Rafael',
    apellido: 'Diaz',   
}
console.log(persona1.nombreCompleto('Ingeniero','3245652361'));


//Uso de Apply para usar el metodo de persona1.nombreCompleto con los datos del persona2
let arreglo = ['Cheff', '3126586431'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));