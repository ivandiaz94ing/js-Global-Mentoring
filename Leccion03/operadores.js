//  Operadores Aritmeticos
let num1 = 5;
let num2 = 2;
let suma;
let resta;
let multiplicacion;
let division;
let modulo;
let exponente;
let incremento;
let decremento;

// suma
suma = num1 + num2;
console.log("Resultado de la suma es: " + suma);

// resta
resta = num1 - num2;
console.log("Resultado de la resta es: " + resta);

// multiplicacion
multiplicacion = num1 * num2;
console.log("Resultado de la multiplicacion es: " + multiplicacion);

// division
division = num1 / num2;
console.log("Resultado de la division es: " + division);

// modulo
modulo = num1 % num2;
console.log("El cociente de la division "+num1+"/"+num2+" es: " + modulo);

// exponente 
exponente = num1 ** num2;
console.log(num1+" ^ "+num2+" = "+exponente);

//PREINCREMENTO
// incremento 
console.log(num1)
i = ++  num1;
console.log(num1+" => " + i);

// decremento 
console.log(num2)
d = -- num2;
console.log(num2+" => " + d);


//POSTINCREMENTO
// incremento 
console.log(num1)
i = num1 ++;
console.log(num1+" => " + i);

// decremento 
console.log(num2)
d = num2 --;
console.log(num2+" => " + d);


//OPERADORES DE ASIGNACION
let a = 1;
console.log(a);

a += 3;
console.log(a);

a -= 2;
console.log(a);

a *= 5;
console.log(a);


//OPERADORES DE COMPARACION
let b = 3, c = 2, f = "3";

z = b == c;
console.log(z);


z = b == f;
console.log(z);

z = b === f;
console.log(z);


//Operador distinto a
z = b != f;
console.log(z);

z = b !== f;
console.log(z);


//OPERADORES RELACIONALES

let j = 3, k = 2, ñ = "3";

let w = j > k;
console.log(w);

w = j < k;
console.log(w);

w = j <= ñ;
console.log(w);

w = j <= ñ;
console.log(w);

//OPERADOR TERNARIO
let resultado = ('IVAN'=='ivan')?"Verdadero":"Falso";
console.log(resultado);

let numero = 92;
resultado = ( numero % 2 == 0 ) ? " Es par " : " Es impar ";
console.log(resultado);
