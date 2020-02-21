function mostrar()
{

	var numero; // = prompt("ingrese un número entre 0 y 10.");

	/*while (numero < 0 || numero > 9 || isNaN(numero)) {					//isNaN es para validar que el dato ingresado sea un Numero
		numero = prompt("ERROR: ingrese un número entre 0 y 10.");

		numero = parseInt(numero);
	}*/

	do {
		numero = prompt("ERROR: ingrese un número entre 0 y 10.");
		numero = parseInt(numero);
	} while (numero < 0 || numero > 9 || isNaN(numero));

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN