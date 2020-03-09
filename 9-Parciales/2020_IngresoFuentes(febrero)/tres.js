/* Bienvenidos.
En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{
  //Variables datos
  var nombre;
  var edad;
  var sexo;
  var estadoCivil;
  var respuesta = true;

  //Variables a)
  var banderaHombreCasadoMasJoven = true;
  var edadHombreCasadoMasJoven;
  var nombreHombreCasadoMasJoven;

  //Variables b)
  banderaPasajeroMasViejo = true;
  var edadPasajeroMasViejo;
  var sexoPasajeroMasviejo;
  var nombrePasajeroMasViejo;

  //Variables c)
  var  contadorMujeresCasadasViudas = 0;

  //Variables d)
  var acumuladorEdadMujeres = 0;
  var contadorPromedioMujeres = 0;

  //Variables e)
  var acumuladorEdadHombreSoltero = 0;
  var contadorHombreSoltero = 0;

  while(respuesta)
  {
    do {
      nombre = prompt("Ingresar nombre del pasajero");
      nombre = nombre.toLowerCase();
    } while (!isNaN(nombre) || nombre == "");

    do {
      edad = prompt("Ingresar edad del pasajero");
      edad = parseInt(edad);
    } while (isNaN(edad) || edad == "" || edad < 18);

    do {
      sexo = prompt("Ingresar el sexo del pasajero");
      sexo = sexo.toLowerCase();
    } while (!isNaN(sexo) || sexo != "f" && sexo != "m");

    do {
      estadoCivil = prompt("Ingresar el estado civil del pasajero");
      estadoCivil = estadoCivil.toLowerCase();
    } while (!isNaN(estadoCivil) || estadoCivil == "" || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

    //a) El nombre del hombre casado más joven.
    if(sexo == "m" && estadoCivil == "casado" && banderaHombreCasadoMasJoven == true || edad < edadHombreCasadoMasJoven)
    {
      banderaHombreCasadoMasJoven = false;
      edadHombreCasadoMasJoven = edad;
      nombreHombreCasadoMasJoven = nombre;
    }

    //b) El sexo y nombre del pasajero/a más viejo.
    if(banderaPasajeroMasViejo = true || edad > edadPasajeroMasViejo)
    {
      edadPasajeroMasViejo = edad;
      sexoPasajeroMasviejo = sexo;
      nombrePasajeroMasViejo = nombre;
    }

    //c) La cantidad de mujeres que hay casadas o viudas.
    if(sexo == "f" && estadoCivil == "casado" || estadoCivil == "viudo")
    {
      contadorMujeresCasadasViudas++;
    }

    //d) El promedio de edad entre las mujeres.
    if(sexo == "f")
    {
      acumuladorEdadMujeres += edad;
      contadorPromedioMujeres++;
    }

    //e) El promedio de edad entre los hombres solteros.
    if(sexo == "m" && estadoCivil == "soltero")
    {
      acumuladorEdadHombreSoltero += edad;
      contadorHombreSoltero++;
    }

    respuesta = confirm("Desea ingresar otro pasajero?");
  }

  //d) El promedio de edad entre las mujeres.
  if(contadorPromedioMujeres == 0)
  {
    promedioEdadMujeres = "No ingresaron mujeres."
  } else
    {
      promedioEdadMujeres = acumuladorEdadMujeres / contadorPromedioMujeres;
    }


  //e) El promedio de edad entre los hombres solteros.
  if (contadorHombreSoltero == 0)
  {
    promedioEdadHombreSoltero = "No ingresaron hombres solteros."    
  } else
    {
      promedioEdadHombreSoltero = acumuladorEdadHombreSoltero / contadorHombreSoltero;
    }


  document.write("El nombre del hombre casado más joven es " + nombreHombreCasadoMasJoven + "<br>");
  document.write("<br>");
  document.write("El sexo del pasajero/a más viejo es " + sexoPasajeroMasviejo + " y su nombre es " + nombrePasajeroMasViejo + "<br>");
  document.write("<br>");
  document.write("La cantidad de mujeres que hay casadas o viudas es " + contadorMujeresCasadasViudas + "<br>");
  document.write("<br>");
  document.write("El promedio de edad entre las mujeres es " + promedioEdadMujeres + "<br>");
  document.write("<br>");
  document.write("El promedio de edad entre los hombres solteros es " + promedioEdadHombreSoltero + "<br>");
  document.write("<br>");

}


/*
//Forma sencilla para un maximo, si tengo contador
if(contador == 0 || alimentoMasCaro < precio) {
  alimentoMasCaro = precio;
  alimentoMasCaroTipo = tipo;
}
 */
