function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta =true;

	while (respuesta) {
		contador++;
		console.log(contador);
		var numero = prompt("Ingrese un numero");
		
		//Validar
		numero = parseInt(numero);	//Convertir "string numero" a numero

		
		while (isNaN(numero)) {		//Validar que el dato ingresado sea un numero
			numero = prompt("Ingrese solo numeros");
			numero = parseInt(numero);		
		}

		acumulador += numero;		//

		respuesta = confirm("Desea continuar?");

	}
		
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN