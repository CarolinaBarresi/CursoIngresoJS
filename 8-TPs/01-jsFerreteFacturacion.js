/*
Carolina Barresi
DIV X
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/ 
let precioUno;
let precioDos;

let precioTres;

function Sumar () 

{ 
precioUno = document.getElementById("txtIdPrecioUno").value;
precioUno = parseFloat(precioUno);
precioDos = document.getElementById("txtIdPrecioDos").value;
precioDos = parseFloat(precioDos);
precioTres = document.getElementById("txtIdPrecioTres").value;
precioTres = parseFloat(precioTres);
Sumar = precioUno + precioDos + precioTres;
alert("La suma es " + Sumar.toFixed(2));
}

function Promedio () 

{
precioUno = document.getElementById("txtIdPrecioUno").value;
precioUno = parseFloat(precioUno);
precioDos = document.getElementById("txtIdPrecioDos").value;
precioDos = parseFloat(precioDos);
precioTres = document.getElementById("txtIdPrecioTres").value;
precioTres = parseFloat(precioTres);
Promedio = (precioUno + precioDos + precioTres)/3;
alert("El promedio es " + Promedio.toFixed(2));
	
}

function PrecioFinal () 

{ 
precioUno = document.getElementById("txtIdPrecioUno").value;
precioUno = parseFloat(precioUno);
precioDos = document.getElementById("txtIdPrecioDos").value;
precioDos = parseFloat(precioDos);
precioTres = document.getElementById("txtIdPrecioTres").value;
precioTres = parseFloat(precioTres);
PrecioFinal = (precioUno + precioDos + precioTres) *21 / 100 + (precioUno + precioDos + precioTres);
alert("El precio final + IVA es " + PrecioFinal.toFixed(2));
}
// Usar parseFloat para que se puedan ingresar numeros decimales
//Ir paso a paso en cada linea
//Primero: tomar dato con ID.value para guardar a la variable
//Segundo: parsear los numeros
//No es necesario los () cuando document.getElementById esta sola en una linea
//Primero guardar los numeros en ID y despues parsearlos ya sea float o int 