'use strict'

//pruebas con let y var
//prueba var
var numero = 40;
console.log(numero);

if(true){
	var numero = 50;
	console.log(numero);
}

console.log(numero);

//prueba let
var texto = "curso de JS";
console.log(texto);//valor

if(true){
	let texto = "curso de laravel";
	console.log(texto);
}
console.log(texto);

let año = 2018;

var numero1 = parseInt(prompt('Introduce el primer numero ', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero ', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt('Introduce el primer numero ', 0));
	numero2 = parseInt(prompt('Introduce el segundo numero ', 0));

}

if(numero1 == numero2){
	alert('numeros iguales');
}else if(numero1 > numero2){
	alert('numero mayor es ' + numero1);
	alert('numero menor es ' + numero2);
}else if (numero2 > numero1){
	alert('El numero mayor es ' + numero2);
	alert('El numero menor es ' + numero1);
}else{
	alert('Introduce numeros correctos');
}
