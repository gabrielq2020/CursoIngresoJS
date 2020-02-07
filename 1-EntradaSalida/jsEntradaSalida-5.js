/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
    var nombre; //Declarar variables primero SIEMPRE
    var edad;
    var texto;

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
    texto = "Usted se llama " + nombre + " y tiene " + edad + " años";

    console.log(nombre); //Mostrar en consola los datos ingresados
    console.log(edad);

    alert (texto);

	
}

