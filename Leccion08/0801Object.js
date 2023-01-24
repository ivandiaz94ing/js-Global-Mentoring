let persona =  {
    nombre: "Yandy",
    apellido: 'Diaz',
    gmail: 'yandy1998@gmail.com',
    edad: 24,
    nombreCompleto: function(){
        return this.nombre+ ' '+this.apellido;
    }
}

console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Ivan';
persona2.direccion = 'Mz 66 Casa 17';
persona2.telefono = 3187524030;

console.log(persona2.telefono);
console.log(persona['apellido']);

//FOR IN
for (nombrePropiedad in persona2) {
    console.log(nombrePropiedad);
    console.log(persona2[nombrePropiedad]);
}
