/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    
    //Declaro las variables
    var ingreseSueldo;
    var sueldoparseado;
    var resultado;

    //Obtener los valores por id
    ingreseSueldo = document.getElementById("sueldo").value;
    
    //Parseo de datos
    sueldoparseado = parseInt(ingreseSueldo);
    
    //Operacion
    resultado = sueldoparseado * 1.1;

    //Mostrar el resultado en caja RESULTADO
    document.getElementById("resultado").value = resultado;
	
}
