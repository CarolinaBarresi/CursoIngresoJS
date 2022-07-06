/*
Carolina Barresi
DIV X
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let numeroUno;

	let numeroDos;

	let sumar;
	
	numeroUno = parseInt(document.getElementById ("txtIdNumeroUno").value);
    numeroDos = parseInt(document.getElementById ("txtIdNumeroDos").value);
	sumar = numeroUno + numeroDos; 
	alert("La suma es " + sumar);	
}

function restar()
{ let numeroUno;
  let numeroDos; 
  let restar;

  numeroUno = parseInt (document.getElementById ("txtIdNumeroUno").value);
  numeroDos = parseInt (document.getElementById ("txtIdNumeroDos").value);
  restar = numeroUno - numeroDos;
  alert("La resta es " + restar);
}

function multiplicar()
{   let numeroUno;

	let numeroDos;

	let multiplicar;

	numeroUno = parseInt (document.getElementById ("txtIdNumeroUno").value);
	numeroDos = parseInt (document.getElementById("txtIdNumeroDos").value);
	multiplicar = numeroUno * numeroDos;
	alert("La multiplicacion es " + multiplicar);

}

function dividir()
{ let numeroUno;

	let numeroDos;

	let dividir;

	numeroUno = parseInt (document.getElementById ("txtIdNumeroUno").value);
	numeroDos = parseInt (document.getElementById ("txtIdNumeroDos").value);
	dividir = numeroUno / numeroDos;
	alert("La division es " + dividir);

	
}

