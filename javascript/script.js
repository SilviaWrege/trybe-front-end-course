// Adição

let num1 = 265;
let num2 = 1287;
let sum = num1 + num2;
console.log(sum);

// subtração

let num3 = 7489;
let num4 = 123;
let subtraction = num3 - num4;
console.log(subtraction);

// multiplicação

let num5 = 7489;
let num6 = 123;
let multiplication = num5 * num6;
console.log(multiplication);

// divisão

let num7 = 7489;
let num8 = 123;
let division = num7 / num8;
console.log(division);

// Módulo (porcentagem)

let num9 = 7489;
let num10 = 123;
let modulo = num9 % num10;
console.log(modulo);

// If/else maior de 3 numeros

let numero1 = 30000;
let numero2 = 1687;
let numero3 = 96;
let maiorNumeroDeTres ='';

if(numero1>numero2 && numero1 >numero3){
maiorNumeroDeTres = 'numero 1 é o maior'
} else if (numero2>numero1 && numero2> numero3){
  maiorNumeroDeTres = 'numero 2 é o maior'
}else if (numero3>numero1 && numero3> numero2){
  maiorNumeroDeTres = 'numero 3 é o maior'
}
console.log(maiorNumeroDeTres);


// If/else maior de 2 numeros

let number1 = 60;
let number2 = 145;
let maiorNumeroDeDois ='';
if(number1>number2){
  maiorNumeroDeDois = 'numero 1 é o maior'
} else if (number2>number1){
  maiorNumeroDeDois = 'numero 2 é o maior'
}
console.log(maiorNumeroDeDois);

// Exercício 6: Há um par entre nós

let primeiroNumero = 65;
let segundoNumero = 14;
let terceiroNumero = 98;
let resultado;

if(primeiroNumero || segundoNumero || terceiroNumero /2 == 0){
resultado = true;
} else{
  resultado = false;
}

console.log(resultado);