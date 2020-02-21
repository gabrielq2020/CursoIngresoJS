function mostrar()
{

	var contador=0;
	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorDePares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaEntrePositivosYNegativos;
	
	
	var respuesta = true;

	while(respuesta) {
		var numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("ERROR: Ingrese solo numeros");
			numero = parseInt(numero);
		}

		/*do {
			var numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		} while (isNaN(numero));
*/
		//CALCULOS
		//Positivos
		if (numero > 0) {
			acumuladorPositivos += numero;
			contadorPositivos++;
		//Negativos
		} else if(numero < 0 ) {
			acumuladorNegativos +- numero;
			contadorNegativos++;
		//Ceros
		} else {
			contadorCeros++;
		}
		
		//PUNTO 6
		if (numero % 2 == 0) {
			contadorDePares++;
		}

		respuesta = confirm("Desesa continuar?");
	
	}

	//PUNTO 7
	if (contadorPositivos != 0) {
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
		
	//PUNTO 8
	if (contadorNegativos != 0) {
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}

	// PUNTO 9
	diferenciaEntrePositivosYNegativos = acumuladorPositivos - acumuladorNegativos;

	document.write("7 - Promedio Positivos: " + promedioPositivos + "<br>");
	document.write("8 - Promedio Negativos: " + promedioNegativos + "<br>");
	document.write("9 - Diferencia +/-: " + diferenciaEntrePositivosYNegativos + "<br>");



}//FIN DE LA FUNCIÓN