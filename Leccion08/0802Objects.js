let persona =  {
    nombre: "Yandy",
    apellido: 'Diaz',
    gmail: 'yandy1998@gmail.com',
    edad: 24,
    nombreCompleto: function(){
        return this.nombre+ ' '+this.apellido;
    }
}

//agragar propiedad a un objeto
persona.profesion = 'Licenciada en Ciencias Naturales';
console.log( persona );

//modificar propiedad
persona.edad = 25;
console.log( persona );

//eliminar propiedad de un objeto
delete persona.gmail;
console.log( persona );

//FORMAS DE IMPRIMIR LOS VALORES DE LOS OBJETOS


//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.edad);

//For in
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//Mediante un Arreglo
let arregloPersona = Object.values( persona );
console.log(arregloPersona);

//Mediante un json
let personaString = JSON.stringify( persona);
console.log( personaString);


