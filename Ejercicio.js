'use strict'

/* Mostrar todos los numeros que hay entre dos numeros introducidos por el usuario
*/

/*var numero1 = parseInt(prompt("Introduce el primer numero"));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

while(numero1 < numero2){
	numero1++;
	if(numero1%2 != 0){
		console.log("El "+numero1+ " es impar" );

	}
}*/

/*
Que nos diga si un numero es par o impar
1- ventana prompt
2- Si no es valido que nos pida de nuevo el numero

*/
/*
var number = parseInt(prompt('Introduce un numero ', 0));

while(isNaN(number)){
	number = parseInt(prompt('Introduce el numero', 0));
}
if(number % 2 == 0){
	alert("Es un numero par");
}else{
	alert("Es impar");
}*/

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt('¿de que numero quieres la tabla?', 1));

document.write("<h1>Tabla del " + numero + "</h1>");
for(var i = 1; i <= 10; i++){
	document.write(numero + " x " + i + " = " + (numero * i)+"</br>");
}
//todas las tablas de multiplicar

for(var c = 1; c <= 10; c++){
	document.write("<h1>Tabla del " + c + "</h1>");
	for(var i = 1; i <= 10; i++){
	document.write(c + " x " + i + " = " + (c * i)+"</br>");
	}
}

