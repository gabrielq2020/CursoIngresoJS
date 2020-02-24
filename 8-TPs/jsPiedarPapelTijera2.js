var numeroRandom;
var contadorGanados = 0;
var contadorPeridos = 0;
var contadorEmpates = 0;

function comenzar()
{
	//Generar número RANDOM entre 1 y 3
	var max = 4;
	var min = 1;
	numeroRandom = Math.floor(Math.random() * (max-min)) + min;
	console.log(numeroRandom);
}//FIN DE LA FUNCIÓN

function piedra()
{
	switch (numeroRandom)
	{
		case 1:
			contadorEmpates++;
			break;
		case 2:
			contadorPeridos++;
			break;
		case 3:
			contadorGanados++;
			break;
	}

}//FIN DE LA FUNCIÓN

function papel()
{
	switch (numeroRandom)
	{
		case 1:
			contadorGanados++;
			break;
		case 2:
			contadorEmpates++;
			break;
		case 3:
			contadorPeridos++;
			break;
	}

}//FIN DE LA FUNCIÓN

function tijera()
{
	switch (numeroRandom)
	{
		case 1:
			contadorPeridos++;
			break;
		case 2:
			contadorGanados++;
			break;
		case 3:
			contadorEmpates++;
			break;
	}
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("Juegos ganados").value = contadorGanados;
	document.getElementById("Juegos perdidos").value = contadorPeridos;
	document.getElementById("Juegos empatados").value = contadorEmpates;
}