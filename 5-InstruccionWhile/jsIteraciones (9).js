function mostrar()
{

	var contador = 0;
	var maximo;
	var minimo;
	var respuesta = true;
	var primeraInteracion = true;
	
	while (respuesta) {										// CUANDO RESPONDO CANCELAR EN EL CONFIRM NO SE CUMPLE LA CONDICION Y SALE DEL WHILE
		contador++;
		//console.log(contador);
		var numero = prompt("Ingrese un numero");			// SOLICITAR QUE INGRESE NUMEROS

		//Validar
		numero = parseInt(numero);							// 	CONVERTIR STRING "NUMERO" EN NUMEROS

		while (isNaN(numero)) {								//	VALIDAR QUE EL DATO INGRESADO NO SEA STRING
			numero = prompt("Ingrese solo numeros");
			numero = parseInt(numero);
		}													// CUANDO PASA DE ESTE WHILE SABEMOS QUE EL DATO INGRESAO ES UN NUMERO

		respuesta = confirm("¿Desea continuar?");			// PREGUNTAR AL USUARIO SI QUIERE SEGUIR INGRESANDO NUMEROS
			
		//Operaciones
		
		if (primeraInteracion) {							// BANDERA, SIRVE PARA EJECUTAR ALGO UNA UNICA VEZ. INGRESAR NUMERO EN MAXIMO Y MINIMO
			primeraInteracion = false;
			minimo = numero;
			maximo = numero;
		} else {
			//A partir de la segunda iteracion
			if (numero > maximo) {
				maximo = numero;
			}

			if (numero < maximo) {
				minimo = numero;
			}
		}

		

		
		
	
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN