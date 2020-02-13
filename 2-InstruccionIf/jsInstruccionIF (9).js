function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;
	var max;
	var min;

	max = 11;	//El maximo no está incluido, en este caso 11, por eso utiliza el 10
	min = 1;

	numeroRandom = Math.floor((Math.random() * (max - min)) + min);

	//Math.random > devuelve un numero aleatorio entre 0 y 0.99
	//Math.floor > redondea al número entero, ejemplo 4.65 = 4

	alert(numeroRandom);

}//FIN DE LA FUNCIÓN