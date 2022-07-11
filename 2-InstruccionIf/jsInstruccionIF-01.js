/*
Carolina Barresi
DIV X
Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{ let edad;
edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);
if(edad==15) {  
alert("Niña bonita");
}
else {
alert ("No sos la niña bonita");
}
}
// if Verdadero
//else Falso, hace referencia si no es
//se abre if parentesis llaves
//else se abre con llaves
//FIN DE LA FUNCIÓN
//else hace referencia a lo que no sucede entre () en if, si la edad no es 15

/*APUNTE PROFESOR
function mostrar()
{
	// operadores logicos:
	// if significa una pregunta condicional
	// == consulta si algo es igual a otra cosa <- tienen que ser del mismo tipo el
	// != si algo es distinto de
	// > si un numero es mayor a otro 
	// < si un numero es menor a otro
	// de este lado con respecto de > este otro lado
	// && analiza si dos o mas condiciones o expresiones son verdaderas o falsas al mismo
	// 			si tenemos dos condiciones y preguntamos usando un && (y) si la primera es falsas
	// || (pipe) se utiliza como O "or, o" y pregunta por todas las condiciones y con que una cond
	// sea verdadera alcanza
	// BOOLEANOS -> true y false

	/*let edad;
	let sexo;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	sexo=prompt("Ingrese su sexo: (F-femenino/M-masculino/NB-no binario) ");

	if(edad==15 || sexo=='f')//si se cumple la condicion que tenemos en el argumento se ejecuta el segmento de codigo dentro de las llaves
	{
		alert("sos la niña bonita");
	}
	else//esto significa "si no"
	{
		alert("No sos la niña bonita");
	}
	// else hace referencia a lo que no sucede en el if
	
	let edad 
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad==15)//es true si se cumple la condicion dentro de las llaves{
	alert("niña bonita")

	}
	else //significa "si no". Se refiere a lo que no sucede en el if{
	alert("no sos la niña bonita")

	}
	
	/*let sexo
	sexo = prompt ("Ingrese su sexo : F fem M masc NB NoBin")
	if(edad ==15 && sexo=='f') ambos datos tienen que ser verdad por el && */
	//if(edad==15sexo=='f') si cualquiera de las dos es valida se cumple 

