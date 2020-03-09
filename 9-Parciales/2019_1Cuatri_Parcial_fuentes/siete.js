/* Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” 
o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros. */

function mostrar()
{
  //Variables datos
  var altura;
  var sexo;
  var contadorJugadores = 0;

  //Variables a)
  var acumuladorAlturas = 0;
  var promedioAlturasTotales;

  //Variables b)
  var alturaMasBaja;
  var sexoAlturaMasBaja;

  //Variables c)
  var contadorMujeresMas190 = 0;

  do 
  {
    contadorJugadores++;

    do {
      altura = prompt("Ingrese la altura (entre 0 y 250).");
      altura = parseInt(altura);
    } while (isNaN(altura) || altura == "" || altura < 0 || altura > 250);

    do {
      sexo = prompt("Ingrese la sexo (f para femenino y m para masculino).");
      sexo = sexo.toLowerCase();
    } while (!isNaN(sexo) || sexo == "" && sexo != "f" && sexo != "m");

    //a) El promedio de las alturas totales.
    acumuladorAlturas += altura;

    //b) La altura más baja y el sexo de esa persona.
    if (contadorJugadores == 1 || alturaMasBaja > altura)
    {
        alturaMasBaja = altura;
        sexoAlturaMasBaja = sexo;
    }

    //c) La cantidad de mujeres que su altura supere los 190 centimetros.
    if (sexo == "f" && altura > 190)
    {
        contadorMujeresMas190++;        
    }    
    
  } while (contadorJugadores < 5);

  //a) El promedio de las alturas totales.
  promedioAlturasTotales = acumuladorAlturas / contadorJugadores;



  document.write("El promedio de las alturas totales es " + promedioAlturasTotales + "<br>");
  document.write("<br>");
  document.write("La altura más baja es " + alturaMasBaja + " y el sexo es " + sexoAlturaMasBaja + "<br>");
  document.write("<br>");
  document.write("La cantidad de mujeres que su altura supere los 190 centimetros es " + contadorMujeresMas190 + "<br>");
  document.write("<br>");


    /* a) El promedio de las alturas totales.
    b) La altura más baja y el sexo de esa persona.
    c) La cantidad de mujeres que su altura supere los 190 centimetros. */

}
