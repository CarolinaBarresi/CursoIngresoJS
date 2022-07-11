/*
Carolina Barresi
DIV X
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ let largo;
let ancho;
let alambre;
largo = document.getElementById("txtIdLargo").value;
largo = parseFloat (largo);
ancho = document.getElementById("txtIdAncho").value;
ancho = parseFloat (ancho);
alambre = (largo + ancho) *2 *3;
alert("La cantidad de alambre a comprar es " + alambre.toFixed(2)+ " metros");
}

function Circulo () 
{ let radio;
let alambre;
radio = document.getElementById("txtIdRadio").value;
radio = parseFloat(radio);
alambre = (radio * 2) *Math.PI *3
alert("La cantidad de alambre a comprar es " + alambre.toFixed(2) + " metros");
	
}

function Materiales () 
{ let largo;
let ancho;
let superficie;
let cemento;
let cal;
largo = document.getElementById("txtIdLargo").value;
largo = parseFloat(largo);
ancho = document.getElementById ("txtIdAncho").value;
ancho = parseFloat(ancho);
superficie = largo * ancho;
cemento = superficie * 2;
cal = superficie * 3;
alert("Se necesitan " + cemento.toFixed(2) + " bolsas de cemento y " + cal.toFixed(2) + " bolsas de cal");

}
/*  Usar getElement y parseInt en lineas separadas 
EJEMPLO
function mostrarAumento()

	let sueldo;
	let resultado;
	let descuento;

	descuento = 25;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	resultado = sueldo - (sueldo*descuento/100);

	document.getElementById("txtIdResultado").value = resultado;
}*/ 
/**/ 