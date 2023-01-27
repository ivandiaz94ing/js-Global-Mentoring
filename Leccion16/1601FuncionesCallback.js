
function miFuncion (nombre, edad, funcionCallback){    
    
    let añoNacimiento = funcionCallback(edad);
    console.log(`Nombre: ${nombre} \nEdad: ${edad}\nAño Nacimiento: ${añoNacimiento}; `)
}

//FUNCION CALLBACK
function calcularAñoNacimiento (edad) {
    let fechaHoy = new Date();
    let añoActual = fechaHoy.getFullYear();
    return añoActual - edad;
    
}

miFuncion('Ivan Arturo',29, calcularAñoNacimiento);

 

