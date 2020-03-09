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
	//Variabels datos
	var item;
	var precio;
	var cantidad;
	var fabricante;
	var contador = 0;

	//Variables a)
	var precioBarbijoMasCaro;
	var cantidadBarbijoMasCaro;
	var fabricanteBarbijoMasCaro;
	
	//Variables b)
	var mayorCantidadItem;
	var fabricanteMayorCantidadItem;

	//Variables c)
	var acumuladorUnidadesJabon = 0;

	while(contador < 5)
	{
		contador++;

		do {
			item = prompt("Ingresar tipo de elemento: barbijo , jabón o alcohol");
			item = item.toLowerCase();
		} while (!isNaN(item) || item == "" || item != "barbijo" && item != "jabon" && item != "alcohol");

		do {
			precio = prompt("Ingresar precio del elemento");
			precio = parseInt(precio);
		} while (isNaN(precio) || precio == "" || precio < 100 || precio > 300);

		do {
			cantidad = prompt("Ingresar cantidad del elemento");
			cantidad = parseInt(cantidad);
		} while (isNaN(cantidad) || cantidad == ""|| cantidad < 0 || cantidad > 1000);

		do {
			fabricante = prompt("Ingresar el fabricante del elemento");
			fabricante = fabricante.toLowerCase();
		} while (!isNaN(fabricante) || fabricante == "");

		
		//a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
		if(item == "barbijo" || contador == 1 || precioBarbijoMasCaro < precio)
		{
			precioBarbijoMasCaro = precio;
			cantidadBarbijoMasCaro = cantidad;
			fabricanteBarbijoMasCaro = fabricante;
		}

		//b) Del ítem con más unidades, el fabricante
		if(contador == 1 || mayorCantidadItem < cantidad)
		{
			mayorCantidadItem = cantidad;
			fabricanteMayorCantidadItem = fabricante;
		}

		//c) Cuántas unidades de jabones hay en total
		if(item == "jabon")
		{
			acumuladorUnidadesJabon += cantidad;
		}

	}

	document.write("Del más caro de los Barbijos, la cantidad de unidades es " + cantidadBarbijoMasCaro + " y el fabricante es " + fabricanteBarbijoMasCaro + "<br>");
	document.write("<br>");
	document.write("Del ítem con más unidades, el fabricante es " + fabricanteMayorCantidadItem + "<br>");
	document.write("<br>");
	document.write("En total hay " + acumuladorUnidadesJabon + " unidades de jabones." + "<br>");
    document.write("<br>");


	/* a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
	b) Del ítem con más unidades, el fabricante
	c) Cuántas unidades de jabones hay en total */
}
