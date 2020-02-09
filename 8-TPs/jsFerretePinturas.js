/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Declarar variables
    var temperatura;
    var resultadosEnCentigrados;

    //Obtener datos
    temperatura = document.getElementById("Temperatura").value;

    //Convertir a centigrados | Formula > (32°F - 32) * 1.8 = 0°C
    resultadosEnCentigrados = (temperatura - 32) * (5/9);

    //Resultado
    alert(temperatura + " grados fahrenheit son " + resultadosEnCentigrados + " grados centígrados.");	
}

function CentigradosFahrenheit () 
{
    //Declarar variables
    var temperatura;
    var resultadoEnFahrenheit;

    //Obtener datos
    temperatura = document.getElementById("Temperatura").value;

    //Convertir a fehrenheit | Formula > (0°C * 1.8) + 32 = 0°F
    resultadosEnCentigrados = (temperatura * (9/5)) + 32;

    //Mostrar resultado
    alert(temperatura + " grados centígrados son " + resultadosEnCentigrados + " grados fahrenheit.");	
}
