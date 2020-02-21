function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = true;
	
	while (respuesta) {										//
		//contador++;
		console.log(contador);
		var numero = prompt("Ingrese un numero");			// SOLICITAR QUE INGRESE NUMEROS

		//Validar
		numero = parseInt(numero);							// 	CONVERTIR STRING "NUMERO" EN NUMEROS

		while (isNaN(numero)) {								//	VALIDAR QUE EL DATO INGRESADO NO SEA STRING
			numero = prompt("Ingrese solo numeros");
			numero = parseInt(numero);
		}

		respuesta = confirm("¿Desea continuar?");			// PREGUNTAR AL USUARIO SI QUIERE SEGUIR INGRESANDO NUMEROS
			
		//Operaciones
		if (numero >= 0) {									// SI ES POSITIVO LOS SUMO
			positivo += numero;
		} else {											// SI ES NEGATIVO LOS MULTIPLICO
			negativo *= numero;
			contador++;
		}

		if (contador == 0) {								//COMO INICIALIZO Nº NEGATIVO EN 1 PARA FACILITAR LAS CUENTAS,
															//SINO INGRESE UN NUMERO NEGATIVO ME VA MOSTRAR 1, POR ESO SI
															//CONTADOR ES 0 QUIERE DECIR QUE NO INGRESO NEGATIVOS Y MUESTRO
															//ESTA LEYENDA.
			document.getElementById('producto').value = "Nunca ingreso un numero negativo";
		}	
			
	}

	document.getElementById('suma').value = positivo;

}//FIN DE LA FUNCIÓN

