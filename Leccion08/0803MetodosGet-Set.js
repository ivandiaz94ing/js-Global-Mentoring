let persona =  {
    nombre: "Yandy",
    apellido: 'Diaz',
    gmail: 'yandy1998@gmail.com',
    edad: 24,
    idioma: 'es',
    get lang (){
        return this.idioma.toLocaleUpperCase();
    },

    set lang (leng){

        this.idioma = leng.toLocaleUpperCase();
    },

    get nombreCompleto ( ) { 
        return this.nombre+ ' '+this.apellido;
    }
}

//console.log(persona.nombreCompleto());
console.log(persona.nombreCompleto);
console.log(persona.idioma);
console.log(persona.lang);
persona.lang = ('español');

console.log(persona.idioma);
console.log(persona.lang);

