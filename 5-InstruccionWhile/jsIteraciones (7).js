function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta ='si';
	var iterador = 5;

	iterador = prompt("Cuantos numeros desea ingresar");

	while (contador < iterador ) {
		contador++;
		console.log(contador);
		var numero = prompt("Ingrese un numero");
		//Validar
		numero = parseInt(numero);

		
		while (isNaN(numero)) {								//	VALIDAR QUE EL DATO INGRESADO NO SEA STRING
			numero = prompt("Ingrese solo numeros");
			numero = parseInt(numero);
		}
		
		//Acumular
		acumulador += numero;

		

	}
	

	// 	OPCION 2

		var respuesta =true;

		while (true) {
		contador++;
		console.log(contador);
		var numero = prompt("Ingrese un numero");
		//Validar
		numero = parseInt(numero);

		
		while (isNaN(numero)) {
			numero = prompt("Ingrese solo numeros");
			numero = parseInt(numero);
		}
		
		//Acumular
		acumulador += numero;

		respuesta = confirm("Desea continuar?");

	}
	
	
	
	
	while (true) {
		contador++;
		var numero = prompt("Ingrese un numero");

		//Validar
		numero = parseInt(numero);

		

		while (isNaN(numero)) {
			numero = prompt("Ingrese SOLO numero");
			numero = parseInt(numero);
		}

		respuesta = prompt("Desea finalizar el ingreso de numeros?");
		if(respuesta == "si") {
			break;
		} else {
			if (respuesta == "no") {
				numero = prompt("Ingrese un numero");
			}
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN