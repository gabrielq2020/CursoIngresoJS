function mostrar()
{

	var contador=0;
	var acumulador=0;
	
	
	while (contador < 5 ) {
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

	}
		
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN