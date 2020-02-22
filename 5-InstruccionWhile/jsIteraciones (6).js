function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	
	while (contador < 5 ) {
		
		//Pedir un numero
		numero = prompt("Ingrese un numero");

		//Validar que es un numero convirtiendo el STRING en un numero
		numero = parseInt(numero);

		//Validar que el dato ingresado no sean letras
		while (isNaN(numero)) {
			numero = prompt("Ingrese solo numeros");
			numero = parseInt(numero);
		}

		//Contar la cantidad de numeros ingresados
		contador++;
		console.log(contador);
				
		//Sumar los numeros ingresados con un acumulador
		acumulador += numero;

	}
		
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN