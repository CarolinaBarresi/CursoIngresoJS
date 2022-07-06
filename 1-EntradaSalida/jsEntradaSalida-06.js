/*
Carolina Barresi
DIV X 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ let NumeroUno

	let NumeroDos

    let suma
NumeroUno = parseInt (document.getElementById ("txtIdNumeroUno").value);
NumeroDos = parseInt (document.getElementById ("txtIdNumeroDos").value);
suma = NumeroUno + NumeroDos

	alert("La suma es " + suma);
}
//lowerCamelCase La primer letra va en minuscula y las siguientes palabras con mayuscula
//mostrarResultado
