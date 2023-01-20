
let numero = "19";

console.log(numero);
console.log(typeof numero);

let edad = Number(numero);
console.log(typeof edad);


let votar;

if(isNaN(edad)){
    console.log("No es un numero");
}else{

    votar = (edad >= 18)?"Puede votar": "Muy joven para votar";
    console.log(votar);
    
}
