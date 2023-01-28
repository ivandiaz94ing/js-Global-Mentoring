let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;

    if (expresion) {
        resolver('Resolvio correctamente');
    } else {
        rechazar('Se produjo un errror');
    }

});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );


//IOTRA FORMA
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    setTimeout(() =>resolver('Saludos desde Promise y  setTimeout '), 1000);
});

//promesa.then(valor => console.log(valor));

async function miFuncionConPromesa(){
    return 'Saludos con promesas async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

async function miFuncionConPromesayAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver('Promesa con async y await');
    });

    console.log(await miPromesa);

}

//miFuncionConPromesayAwait();

//PROMESAS, AWAIT, ASYNC , SETTIMEOUT
async function miFuncionPromesaAwaitAsyncSetTimeout(){
    let fecha1 = new Date();
    console.log(`Minuto: ${fecha1.getMinutes()} Segundos: ${fecha1.getSeconds()}`);

   let miPromesa = new Promise(resolver =>{
    setTimeout( () => resolver('Promesa con { async - await - setTimeout }'), 5000);
   }) ;
   console.log(await miPromesa);
   let fecha2 = new Date();
   console.log(`Minuto: ${fecha2.getMinutes()} Segundos: ${fecha2.getSeconds()}`);

}

miFuncionPromesaAwaitAsyncSetTimeout();