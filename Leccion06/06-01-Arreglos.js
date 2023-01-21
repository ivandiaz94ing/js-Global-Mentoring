

//FORMAS DE DECLARAR ARREGLOS

let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');
console.log(autos);

const motos = ['Boxer, AKT, Honda, Suzuki'];
console.log(motos);


//MODIFICAR LOS ELEMENTOS DE UN ARREGLO
motos.push('Yamaha');
motos[2]= "Hero";

for (let index = 0; index < motos.length; index++) {
    console.log(motos[index]);
    
}

for (let index = 0; index < autos.length; index++) {
    console.log(autos[index]);
    
}

console.log(motos);
console.log(autos);

//PREGUNTAR SI ES UN ARREGLO
console.log(Array.isArray(autos));

console.log(autos instanceof Array);

