var numeroRandom;
var contadorGanados = 0;
var contadorPerdidos = 0;
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
			console.log(contadorEmpates);
			alert("Empato");
			break;
		case 2:
			contadorPerdidos++;
			console.log(contadorPerdidos);
			alert("Perdio");
			break;
		case 3:
			contadorGanados++;
			console.log(contadorGanados);
			alert("Gano");
			break;
	}

	document.getElementById("ganadas").value = "Juegos ganados: " + contadorGanados;
	document.getElementById("perdidas").value = "Juegos perdidos: " + contadorPerdidos;
	document.getElementById("empatadas").value = "Juegos empatados: " + contadorEmpates;

}//FIN DE LA FUNCIÓN

function papel()
{
	switch (numeroRandom)
	{
		case 1:
			contadorGanados++;
			alert("Gano");
			break;
		case 2:
			contadorEmpates++;
			alert("Empato");
			break;
		case 3:
			contadorPerdidos++;
			alert("Perdio");
			break;
	}

	document.getElementById("ganadas").value = "Juegos ganados: " + contadorGanados;
	document.getElementById("perdidas").value = "Juegos perdidos: " + contadorPerdidos;
	document.getElementById("empatadas").value = "Juegos empatados: " + contadorEmpates;

}//FIN DE LA FUNCIÓN

function tijera()
{
	switch (numeroRandom)
	{
		case 1:
			contadorPerdidos++;
			alert("Perdio");
			break;
		case 2:
			contadorGanados++;
			alert("Gano");
			break;
		case 3:
			contadorEmpates++;
			alert("Empato");
			break;
	}	

	document.getElementById("ganadas").value = "Juegos ganados: " + contadorGanados;
	document.getElementById("perdidas").value = "Juegos perdidos: " + contadorPerdidos;
	document.getElementById("empatadas").value = "Juegos empatados: " + contadorEmpates;

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	//document.getElementById("ganadas").value = "Juegos ganados: " + contadorGanados;
	//document.getElementById("perdidas").value = "Juegos perdidos: " + contadorPerdidos;
	//document.getElementById("empatadas").value = "Juegos empatados: " + contadorEmpates;	
}