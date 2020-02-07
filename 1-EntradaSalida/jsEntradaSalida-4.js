/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;

	dato = prompt ("Ingrese un dato"); // Es una ventana que me permite obtener informacion

	document.getElementById("elNombre").value = dato;

}

