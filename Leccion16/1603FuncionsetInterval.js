//
let reloj = () => {
    let fecha = new Date();

    console.log(`${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`);
}

//Funcion setInterval
setInterval(reloj, 1000);