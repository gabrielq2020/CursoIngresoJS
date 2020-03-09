/* Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por
document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. */

function mostrar()
{
  //Variables datos
  var pais;
  var habitantes;
  var temperatura;
  var respuesta = true;

  //Variables a)
  var contadorTemperaturasPares = 0;

  //Variables b)
  var banderaMenosHabitantes = true;
  var menosHabitantes;
  var paisMenosHabitantes;

  //Variables c)
  var contadorPaisesTemperaturaMas40 = 0;

  //Variables d)
  var promedioHabitantesPaises = 0;
  var acumuladorHabitantes = 0;
  var contadorPaises = 0;

  //Variables f)
  var temperaturaMinima;
  var paisTemperaturaMinima;  

  do
  {
    do {
      pais = prompt("Ingrese un pais.");
      pais = pais.toLowerCase();
    } while (!isNaN(pais) || pais == "");

    do {
      habitantes = prompt("Ingrese la cantidad de habitantes por millones (entre 1 y 7000).");
      habitantes = parseInt(habitantes);
    } while (isNaN(habitantes) || habitantes == "" || habitantes < 1 || habitantes > 7000);

    do {
      temperatura = prompt("Ingrese la temperaruta minima registrada (entre -50 y 50).");
      temperatura = parseInt(temperatura);
    } while (isNaN(temperatura) || temperatura == "" || temperatura < -50 || temperatura > 50);

    //a) La cantidad de temperaturas pares.
    if (temperatura % 2 == 0)
    {
      contadorTemperaturasPares++;
    }

    //b) El nombre del pais con menos habitantes
    if (contadorPaises == 0 || menosHabitantes > habitantes)
    {
      menosHabitantes = habitantes;
      paisMenosHabitantes = pais;
    }

    //c) la cantidad de paises que superan los 40 grados.
    if (temperatura > 40)
    {
      contadorPaisesTemperaturaMas40++;    
    }

    //d) el promedio de habitantes entre los paises ingresados.
    acumuladorHabitantes += habitantes;
    contadorPaises++;

    //f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
    if (contadorPaises == 1 || temperaturaMinima > temperatura)
    {
      temperaturaMinima = temperatura;
      paisTemperaturaMinima = pais;    
    }

    respuesta = confirm("Desea ingresar mas datos?")
  } while (respuesta);

  //d) el promedio de habitantes entre los paises ingresados.
  if (contadorPaises == 0)
  {
    promedioHabitantesPaises = "No se ingresaron paises.";    
  } else
    {
      promedioHabitantesPaises = acumuladorHabitantes / contadorPaises;      
    }
  

  document.write("La cantidad de temperaturas pares es " + contadorTemperaturasPares + "<br>");
  document.write("<br>");
  document.write("El nombre del pais con menos habitantes es " + paisMenosHabitantes + "<br>");
  document.write("<br>");
  document.write("La cantidad de paises que superan los 40 grados es " + contadorPaisesTemperaturaMas40 + "<br>");
  document.write("<br>");
  document.write("El promedio de habitantes entre los paises ingresados es " + promedioHabitantesPaises + "<br>");
  document.write("<br>");
  document.write("La temperatura mínima ingresada es " + temperaturaMinima + " y corresponde a " + paisTemperaturaMinima + "<br>");
  document.write("<br>");

}

/* a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes.
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados.
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. */