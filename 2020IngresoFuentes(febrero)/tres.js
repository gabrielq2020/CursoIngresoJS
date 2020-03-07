/* Bienvenidos.
En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;

  var respuesta = true;

  banderaPrimeraEdad = true;

  //Variables punto a)
  var edadHombreCasadoMasJoven;
  var nombreHombreCasadoMasJoven;

  //Variables punto b)
  var edadMasViejo;
  var sexoMasViejo;
  var nombreMasViejo;

  //Variables punto c)
  var contadorMujeresCasadasViudas;

  //Variables punto d)
  var contadorMujeres = 0;
  var acumuladorEdadMujeres = 0;
  var promedioEdadMujeres;

  //Variables punto e)
  var contadorHombresSolteros = 0;
  var acumuladorEdadHombresSolteros = 0;
  var promedioEdadHombresSolteros;


	while (respuesta) {


		//Nombre
		nombre = prompt("Ingrese el nombre del pasajero");
		nombre = nombre.toLowerCase();

		while (!isNaN(nombre) || nombre == "") {
			nombre = prompt("ERROR: Por favor ingrese el nombre del pasajero");
			nombre = nombre.toLowerCase();
		}

		//Edad
		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);

		while (isNaN(edad) || edad < 18 || edad == "") {
			edad = prompt("ERROR: Por favor ingrese una edad mayor a 18.");
			edad = parseInt(edad);
		}

		//Sexo
		sexo = prompt("Ingrese sexo: f para femenino y m para masculino");
		sexo = sexo.toLowerCase();

		while (!isNaN(sexo) || sexo == "" || sexo != "f" && sexo != "m") {
			sexo = prompt("ERROR: Por favor ingrese sexo: f para femenino y m para masculino");
			sexo = sexo.toLowerCase();
		}

		//Estado civil
		estadoCivil = prompt("Ingrese estado civil: soltero, casado o viudo");
		estadoCivil = estadoCivil.toLowerCase();

		while (!isNaN(estadoCivil) || estadoCivil == "" || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("ERROR: Por favor ingrese estado civil: soltero, casado o viudo");
			estadoCivil = estadoCivil.toLowerCase();
		}

    //Bandera para carga inicial de edad en punto a) y punto b)
    if (banderaPrimeraEdad == true) {
      banderaPrimeraEdad = false;
      edadHombreCasadoMasJoven = edad;
      edadMasViejo = edad;
    }

		//Punto a) El nombre del hombre casado más joven.
		if (sexo == "m" && estadoCivil == "casado" && edadHombreCasadoMasJoven < edad ) {
      edadHombreCasadoMasJoven = edad;
      console.log(edadHombreCasadoMasJoven);
      nombreHombreCasadoMasJoven = nombre;
		}

    //Punto b) El sexo y nombre del pasajero/a más viejo.
    if (edadMasViejo < edad) {
      edadMasViejo = edad;
      sexoMasViejo = sexo;
      nombreMasViejo = nombre;
    }

    //Punto c) La cantidad de mujeres que hay casadas o viudas.
    if (sexo == "f" && estadoCivil == "casadas" || estadoCivil == "viudo") {
      contadorMujeresCasadasViudas++;
    }

    //Punto d) El promedio de edad entre las mujeres.
    if (sexo == "f") {
      acumuladorEdadMujeres += edad;
      contadorMujeres++;
    }

    //Punto e) El promedio de edad entre los hombres solteros.
    if(sexo == "m" && estadoCivil == "soltero")
      acumuladorEdadHombresSolteros += edad;
      contadorHombresSolteros++;

		respuesta = confirm("Desea continuar?");
	}

  //Calculo Punto d) Promedio edad mujeres
  if (contadorMujeres == 0) {
    promedioEdadMujeres = "(No ingresaron mujeres)";
  } else {
    promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeres;
  }


  //Calculo Punto e) Promedio edad hombres solteros
  if (contadorHombresSolteros == 0) {
    promedioEdadHombresSolteros = "(No ingresaron hombres solteros)"
  } else {
    promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;
  }

  console.log(contadorHombresSolteros);
  console.log(contadorMujeres);


  document.write("El nombre del hombre casado más joven es " + nombreHombreCasadoMasJoven + "<br>");
  document.write("<br>");
  document.write("El sexo y nombre del pasajero/a más viejo es " + sexoMasViejo + " y se llama " + nombreMasViejo + "<br>");
  document.write("<br>");
  document.write("La cantidad de mujeres que hay casadas o viudas es " + contadorMujeresCasadasViudas + "<br>");
  document.write("<br>");
  document.write("El promedio de edad entre las mujeres " + promedioEdadMujeres + "<br>");
  document.write("<br>");
  document.write("El promedio de edad entre los hombres solteros " + promedioEdadHombresSolteros + "<br>");

}




/*
//Forma sencilla para un maximo, si tengo contador
if(contador == 0 || alimentoMasCaro < precio) {
  alimentoMasCaro = precio;
  alimentoMasCaroTipo = tipo;
}
 */
