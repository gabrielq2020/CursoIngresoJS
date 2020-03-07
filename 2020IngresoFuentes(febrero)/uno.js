/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total */

function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var contador = 0;

	//Variables punto a)
	var cantidadMasCaroBarbijo;
	var fabricanteMasCaroBarbijo;
	var precioMasCaroBarbijo;
	var banderaBarbijo = "no paso";

	//Variables punto b)
	var mayorCantidadUnidades;
	var mayorCantidadTipo;
	var mayorCantidadFabricante;

	//Variables punto c)
	var acumuladorJabon = 0;



	while (contador < 5) {
		contador++;

		//Tipo
		tipo = prompt("Ingrese el tipo de producto: barbijo, jabon o alcohol");
		tipo = tipo.toLowerCase();

		while (!isNaN(tipo) || tipo == "" || tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt("ERROR: Por favor ingrese el tipo de producto: barbijo, jabon o alcohol");
			tipo = tipo.toLowerCase();
		}

		//Precio
		precio = prompt("Ingrese un precio mayor a 100 y menor a 300");
		precio = parseInt(precio);

		while (isNaN(precio) || precio < 100 || precio > 300 || precio == "") {
			precio = prompt("ERROR: Por favor ingrese un precio mayor a 100 y menor a 300");
			precio = parseInt(precio);
		}

		//Cantidad
		cantidad = prompt("Ingrese la cantidad");
		cantidad = parseInt(cantidad);

		while (isNaN(cantidad) || cantidad < 0 || cantidad > 1000 || precio == "") {
			cantidad = prompt("ERROR: Por favor ingrese la cantidad");
			cantidad = parseInt(cantidad);
		}

		//Marca
		marca = prompt("Ingrese la marca");
		marca = marca.toLowerCase();

		while (!isNaN(marca) || marca == "") {
			marca = prompt("ERROR: Por favor ingrese la marca");
			marca = marca.toLowerCase();
		}

		//Fabricante
		fabricante = prompt("Ingrese la marca");
		fabricante = fabricante.toLowerCase();

		while (!isNaN(fabricante) || fabricante == "") {
			fabricante = prompt("ERROR: Por favor ingrese la marca");
			fabricante = fabricante.toLowerCase();
		}


		//a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante

		if (tipo == "barbijo" && banderaBarbijo == "no paso" || precioMasCaroBarbijo < precio ) { //Si pongo < saco maximo y si pongo > saco minimo
			banderaBarbijo = "paso";
			precioMasCaroBarbijo = precio;
			cantidadMasCaroBarbijo = cantidad;
			fabricanteMasCaroBarbijo = fabricante;
		}


		//b) Del ítem con más unidades, el fabricante

		if (contador == 1 || mayorCantidadUnidades < cantidad) {
			mayorCantidadUnidades = cantidad;
			mayorCantidadTipo = tipo;
			mayorCantidadFabricante = fabricante;
		}




		//c) Cuántas unidades de jabones hay en total
		if (tipo == "jabon") {
			acumuladorJabon += cantidad;
		}





	}


  //HACERLO POR DOCUMENTO.WRITE !!!
	//a)
	alert("De los barbijos mas caros, la cantidad de unidades es: " + cantidadMasCaroBarbijo + " y el fabricante es " + fabricanteMasCaroBarbijo);

	//b)
	alert("El item con mas unidades es: " + mayorCantidadTipo + " y el fabricante es: " + fabricanteMasCaroBarbijo);

	//c)
	alert("La cantidad de jabones en total es " + acumuladorJabon);
}
