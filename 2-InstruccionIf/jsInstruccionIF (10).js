function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;
	var max;
	var min;

	max = 11;	//El maximo no está incluido, en este caso 11, por eso utiliza el numero anterior en este caso el 10
	min = 1;

	numeroRandom = Math.floor((Math.random() * (max - min)) + min);
	console.log(numeroRandom);

	if(numeroRandom >= 9) {
		alert("EXCELENTE");
	} else {
		if (numeroRandom >=4) {
			alert("APROBÓ");
		} else {
			alert("Vamos, la proxima se puede")
		}
	}

}//FIN DE LA FUNCIÓN