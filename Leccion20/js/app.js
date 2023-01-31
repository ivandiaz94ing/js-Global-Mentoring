console.log('Aplicacion calculadora');
function sumar(){
    let valorA =document.getElementById('operandoA').value;
    let valorB =document.getElementById('operandoB').value;
    try {
        let n1 = Number(valorA);
        let n2 = Number(valorB);
        let resultado = n1 + n2; 
        document.getElementById('msj').innerHTML = `El resultado es : ${resultado}`;
        console.log(`El resultado es : ${resultado}`)


        
    } catch (error) {
        console.log(error);
        
    }
    
}