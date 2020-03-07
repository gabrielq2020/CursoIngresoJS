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

		//Punto a) El nombre del hombre casado más joven.
		if (tipo == "barbijo" && banderaBarbijo == 0 || precioMasCaroBarbijo < precio ) {
			banderaBarbijo++;
			precioMasCaroBarbijo = precio;
			cantidadMasCaroBarbijo = cantidad;
			fabricanteMasCaroBarbijo = fabricante;

		}







		respuesta = confirm("Desea continuar?");
	}


	alert("tres");
}
