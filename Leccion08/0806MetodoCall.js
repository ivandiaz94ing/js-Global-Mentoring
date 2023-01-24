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
//Uso de Call para usar el metodo de persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Ingeniero','3245652361'));
console.log(persona1.nombreCompleto.call(persona2, 'Cocinero','3116784040'));