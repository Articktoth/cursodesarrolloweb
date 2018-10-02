/*
Calculadora :
	-Pida dos numeros por pantalla
	-si metemos uno mal que nos lo vuelva a pedir
	-en el cuerpo de la pagina, en una alerta y el 
	resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));

var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){

	numero1 = parseInt(prompt('Introduce el primer numero', 0));
	numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" +
 "La resta es: " + (numero1-numero2) + "<br/>" +
  "La multiplicacion es: " + (numero1 * numero2)+ "<br/>" +
   "La division es: " + (numero1/numero2); 

 document.write(resultado);
 //jajaja