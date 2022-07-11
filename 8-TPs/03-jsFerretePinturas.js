/*
Carolina Barresi
DIV X
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ let temperaturaF;
let temperaturaC;
temperaturaF = document.getElementById("txtIdTemperatura").value;
temperaturaF = parseFloat(temperaturaF);
temperaturaC = (temperaturaF - 32)*5/9;
alert(temperaturaF + " Fahrenheit son " + temperaturaC.toFixed(2) + " Centigrados");
}

function CentigradosFahrenheit () 
{let temperaturaC;
let temperaturaF;
temperaturaC = document.getElementById("txtIdTemperatura").value;
temperaturaC = parseFloat(temperaturaC);
temperaturaF = (temperaturaC * 9/5) + 32;
alert(temperaturaC + " centigrados son " + temperaturaF.toFixed(2) + " Fahrenheit");
}
