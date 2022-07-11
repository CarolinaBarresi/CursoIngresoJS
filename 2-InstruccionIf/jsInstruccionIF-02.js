/*
Carolina Barresi
DIV X
Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad*/
function mostrar()
{let edad;
edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);
if(edad>17){
alert("Es mayor de edad");
}
}
//< va de izquierda a derecha
// edad < 17 numeros menores que 17. 16, 15, 14, etc
// edad > 17 numeros mayores que 17. 18, 19, 20, etc