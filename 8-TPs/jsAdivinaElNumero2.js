/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroRandom; 
var contadorIntentos = 0;
var numeroIngresado;

function comenzar()
{
	//Generar número RANDOM entre 1 y 100
	var max = 101;
	var min = 1;

	numeroRandom = Math.floor(Math.random() * (max - min)) + min;
	console.log(numeroRandom);
}

function verificar()
{
	//Obtener dato por id
	numeroIngresado = document.getElementById("numero").value;
		
	//Validar datos ingresados
	numeroIngresado = parseInt(numeroIngresado);
	console.log(numeroIngresado);
	
	while (isNaN(numeroIngresado)/* || (numeroIngresado < 1 || numeroIngresado > 100)*/)
	{
		numeroIngresado = prompt("Por favor ingrese un numero válido.");
		numeroIngresado = parseInt(numeroIngresado);
	}
	
	//Contabilizar los intentos
	contadorIntentos++;
	console.log(contadorIntentos);

	//Operacion
	if (numeroRandom == numeroIngresado)
	{
		switch (contadorIntentos)
		{
			case 1:
				document.getElementById("intentos").value = "Adivino en solo 1 intento, usted es un Psíquico.";
				break;
			case 2:
				document.getElementById("intentos").value = "Adivino en 2 intentos, excelente percepción.";
				break;
			case 3:
				document.getElementById("intentos").value = "Adivino en 3 intentos, esto es suerte.";
				break;
			case 4:
				document.getElementById("intentos").value = "Adivino en 4 intentos, excelente técnica.";
				break;
			case 5:
				document.getElementById("intentos").value = "Adivino en 5 intentos, usted está en la media.";
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:			
				document.getElementById("intentos").value = "Adivino en " + contadorIntentos + " intentos, le falta técnica.";
				break;
			default:
				document.getElementById("intentos").value = "Adivino mas de " + contadorIntentos + " intentos, es un afortunado en el amor.";
				break;
		}
	}
	else
	{
		document.getElementById("intentos").value = "No adivino el numero,vuelva a intentarlo.";
		
	}
}