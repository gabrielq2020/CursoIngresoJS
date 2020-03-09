/* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
 */

function mostrar()
{
  var letra;
  var numero;
  var respuesta = true;

  //Variables a)
  var contadorNumerosPares = 0;

  //Variables b)
  var contadorNumerosImpares = 0;

  //Variables c)
  var contadorCeros = 0;

  //Variables d)
  var acumuladorNumerosPositivos = 0;
  var contadorNumerosPositivos = 0;

  //Variables e)
  var acumuladorNumerosNegativos = 0;

  //Variables f)
  var numeroMinimo;
  var letraMinimo;
  var numeroMaximo;
  var letraMaximo;

  do
  {
    do {
      letra = prompt("Ingrese una letra.");
      letra = letra.toLowerCase();
    } while (!isNaN(letra) || letra == "");

    do {
      numero = prompt("Ingrese la numero (entre -100 y 100).");
      numero = parseInt(numero);
    } while (isNaN(numero) || numero == "" || numero < -100 || numero > 100);

    /* if (numero == 0)  //c)
    {
      contadorCeros++;      
    } else if(numero % 2 == 0)
      {
      contadorNumerosPares; //a)
      } else
        {
          contadorNumerosImpares; //b)
        } */

    //a) La cantidad de números pares.
    if(numero %2 == 0)
    {
      contadorNumerosPares++;
    }

    //a) La cantidad de números impares.
    if(numero %2 != 0)
    {
      contadorNumerosImpares++;
    }

    //c) La cantidad de ceros.
    if (numero == 0)
    {
      contadorCeros++;      
    }

    //d) El promedio de todos los números positivos ingresados.
    if (numero > 0) {
      acumuladorNumerosPositivos += numero;
      contadorNumerosPositivos++;
    }

    //e) La suma de todos los números negativos.
    if (numero < 0)
    {
      acumuladorNumerosNegativos += numero;      
    }

    //f) El número y la letra del máximo y el mínimo.
    if (contadorCeros == 1 || contadorNumerosPares == 1 || contadorNumerosImpares == 1 || numeroMaximo < numero)
    {
      numeroMaximo = numero;
      letraMaximo = letra;      
    }

    if (contadorCeros == 1 || contadorNumerosPares == 1 || contadorNumerosImpares == 1 || numeroMinimo > numero)
    {
      numeroMinimo = numero;
      letraMinimo = letra;
    }
    
    respuesta = confirm("Desea cargar mas datos?");
  } while (respuesta);

  //d) El promedio de todos los números positivos ingresados.
  if (contadorNumerosPositivos == 0)
  {
    promedioNumerosPositivos = "No se ingresaron numeros positivos";    
  } else
    {
      promedioNumerosPositivos = acumuladorNumerosPositivos / contadorNumerosPositivos;
    }


  document.write("La cantidad de números pares es " + contadorNumerosPares + "<br>");
  document.write("<br>");
  document.write("La cantidad de números impares es " + contadorNumerosImpares + "<br>");
  document.write("<br>");
  document.write("La cantidad de ceros es " + contadorCeros + "<br>");
  document.write("<br>");
  document.write("El promedio de todos los números positivos ingresados es " + promedioNumerosPositivos + "<br>");
  document.write("<br>");
  document.write("La suma de todos los números negativos es " + acumuladorNumerosNegativos + "<br>");
  document.write("<br>");
  document.write("El número y la letra del mínimo es: " + numeroMinimo + ", " + letraMinimo + "<br>");
  document.write("<br>");
  document.write("El número y la letra del máximo es: " + numeroMaximo + ", " + letraMaximo + "<br>");
  document.write("<br>");
  
}
