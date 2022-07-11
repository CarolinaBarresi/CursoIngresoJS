/*
Carolina Barresi
DIV X 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ let dolarOficial;
let dolarBlue;
dolarOficial = parseFloat(dolarOficial);
dolarOficial = document.getElementById ("txtIdNumeroUno").value;
dolarBlue = parseFloat(dolarBlue);
dolarBlue = document.getElementById ("txtIdNumeroDos").value;
sumar = (dolarOficial + dolarBlue) * 100 /100;

alert("La diferencia es " + sumar);
}
//lowerCamelCase La primer letra va en minuscula y las siguientes palabras con mayuscula
//mostrarResultado
