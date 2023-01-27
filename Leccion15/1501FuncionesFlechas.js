//FUNCION NORMAL
function miFuncion () {
    console.log('Saludos desde mi funcion');
}
miFuncion();



//FUNCION ANONIMA
let saludar = function(){
    console.log('Saludos desde mi funcion anónima');
}

saludar();



//FUNCION FLECHA
// let funcionFlecha = ( ) =>{
//     console.log('Saludos desde mi funcion flecha');
// }


let funcionFlecha = () => console.log('Saludos desde mi funcion flecha');
funcionFlecha();

//Cuando solo recibo un solo parametro entonces no es necesario los parentesis
// let funcionParametros = (mensaje) => {
//     return mensaje;
// }

let funcionParametros = mensaje => mensaje;

console.log(funcionParametros('Funcion flecha recibiendo parametros'));


// const funcionVariosParametros = (a, b) => {
//     console.log('Hola mundo');
//     return `El resultado es :${a + b}`;
// }

const funcionVariosParametros = (a, b) => `El resultado es : ${a + b}`;


console.log(funcionVariosParametros(4, 9));


//MANDANDO OBJETOS
const regresaObjeto = () => ({nombre: 'Juan', parentesco: 'Abuelo_Paterno'});
console.log(regresaObjeto());