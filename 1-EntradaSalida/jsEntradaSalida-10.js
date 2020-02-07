/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    //Declaro variables
    var ingreseImporte;
    var importeParseado;
    var resultado;

    //Obtengo los datos por ID
    ingreseImporte = document.getElementById("importe").value;

    //Parseo de datos
    importeParseado = parseInt(ingreseImporte);

    //Operacion
    resultado = importeParseado * 0.75;

    //Mostrar resultado en caja RESULTADO
    document.getElementById("resultado").value = resultado;

	
}
