
//Ciclo Mientras o While
let contador = 0;
while (contador < 3) {
    console.log("Iteracion: "+contador); 
    contador ++;   
}


//Ciclo Do While o Repita hasta
let i = 0;
do {
    console.log('Iteracion: '+i);
    i++;
    
} while (i <= 3);


//Ciclo For o Para
for (let i = 0; i < 3; i++) {
    console.log('Iteracion: '+i);
}

//BREAK EN LOS CICLOS
for (let contador = 0; contador<= 10; contador++) {
        if (contador % 2 == 0) {
            console.log(contador+" ");
            break;
        } else {
            
        }
    }

    //PALABRA CONTINUE 
    for (let cont = 0; cont <= 10; cont++) {
        if (cont % 2 !== 0) {

            continue;
        } 
            console.log(cont)
    }

    //ETIQUETAS 
    inicio:
    for (let k =0; k<=10; k++){
        if (k % 2 !== 0) {
            continue inicio;
        }
        console.log(k);
    }

    console.log


