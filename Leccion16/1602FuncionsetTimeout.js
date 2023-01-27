//LLamadas asincronas  con uso de setTimeout

function miFuncionCallBack () {
    console.log('Saludo asincrono despues de 10 segundos');
}

setTimeout(miFuncionCallBack, 10000);

setTimeout(function (){console.log('Saludo Asincrono 2 despues de 15 segundos')}, 15000);

setTimeout(  () => console.log('Saludo Asincrono 3 despues de 20 segundos'), 20000);
