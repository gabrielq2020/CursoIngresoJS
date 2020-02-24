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


	//OPCION 2
	/* var contador = 0;
	var respuesta = 'si';

	while (respuesta=="si")
	{
		//Solicito que ingrese un numero
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		//Pregunto si quiero seguir ingresando numeros
		respuesta = prompt("Desea ingresar otro numero?");
		respuesta = respuesta.toLowerCase();	//Convertir el STRING a minuscula
		//Si ingreso cualquier valor que no sea SI corta el proceso y eso esta mal
	} */


	//OPCION 3
	var contador = 0;		//LO VOY A UTILIZAR PARA SABER SI ES EL PRIMER NUMERO QUE INGRESO
	var respuesta = true;
	var maximo;
	var minimo;

	while (respuesta==true) 
	{
		//Solicito que ingrese un numero
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		if (contador==0)	//Inicializo el maximo y minimo con el primer numero ingresado
		{
			maximo = numero;
			minimo = numero;	
		}
		else
		{
			if(numero>maximo)	//Si el segundo numero ingresado es mayor al primero pasa a ser maximo
			{
				maximo = numero
			}
			else
			{
				if (numero<minimo)	//Si el segundo numero ingresado es menor al primero pasa a ser minimo
				{
					minimo = numero;	
				}
			}
		}

		contador++;

		//Pregunto si quiero seguir ingresando numeros
		respuesta = confirm("Desea ingresar otro numero?"); //Aceptar devuelve TRUE y Cancelar FALSE

		//Mostrar en pantalla maximo y minimo
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
	
	}


	//OPCION 4
	var flag = true;		//LO VOY A UTILIZAR PARA SABER SI ES EL PRIMER NUMERO QUR INGRESO
	var numero;
	var respuesta = true;
	var maximo;
	var minimo;

	while (respuesta==true) 
	{
		//Solicito que ingrese un numero
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		if (flag==true)	//Pregunto a la bandera si ya se cargo alguna vez un numero
		{
			maximo = numero;
			minimo = numero;	
		}
		else
		{
			if(numero>maximo)	//Si el segundo numero ingresado es mayor al primero pasa a ser maximo
			{
				maximo = numero
			}
			else
			{
				if (numero<minimo)	//Si el segundo numero ingresado es menor al primero pasa a ser minimo
				{
					minimo = numero;	
				}
			}
		}

		flag = false;

		//Pregunto si quiero seguir ingresando numeros
		respuesta = confirm("Desea ingresar otro numero?"); //Aceptar devuelve TRUE y Cancelar FALSE

		//Mostrar en pantalla maximo y minimo
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
	
	}



	//OPCION 5
	var flag = true;		//LO VOY A UTILIZAR PARA SABER SI ES EL PRIMER NUMERO QUR INGRESO
	var numero;
	var respuesta = true;
	var maximo;
	var minimo;

	while (respuesta==true) 
	{
		//Solicito que ingrese un numero
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		while(isNaN(numero) || (numero < 1 || numero > 10)) //Pregunto en la condicion lo que NO quiero que ocurra			
		{
			numero = prompt("Reingrese un numero: ");
			numero = parseInt(numero);
		}

		if(flag == true || numero>maximo)	//Si el segundo numero ingresado es mayor al primero pasa a ser maximo
		{	//La primera vez el flag es true y no importa la otra comparacion, la segunda vez flag es false
			//y ahi va a comparar el primer numero ingresado con el segundo si es mayor
			maximo = numero;
		}
		if (falg == true || numero<minimo)	//Si el segundo numero ingresado es menor al primero pasa a ser minimo
		{	////La primera vez el flag es true y no importa la otra comparacion, la segunda vez flag es false
			//y ahi va a comparar el primer numero ingresado con el segundo si es menor
			minimo = numero;	
		}
			
		flag = false;

		//Pregunto si quiero seguir ingresando numeros
		respuesta = confirm("Desea ingresar otro numero?"); //Aceptar devuelve TRUE y Cancelar FALSE

	}

		//Mostrar en pantalla maximo y minimo
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
	
	