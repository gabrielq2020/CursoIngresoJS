/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/


var colorSecreto;

//Tomar la hora de ingreso a la página
var tiempoInicio = new Date();

function comenzar()
{
    //Generar numero random para asignar color
    var colorRandom;
    var max = 7;
    var min = 1;

    colorRandom = Math.floor(Math.random() * (max - min)) + min;


    //Mostrar color en pantalla
    /*switch (colorSecreto) {                                             //Switch es una igualdad estricta
        case 1: //Azul
            document.getElementById("ColorElejido").value = "Azul";
            break;
        case 2: //Amarillo
            document.getElementById("ColorElejido").value = "Amarillo";
                break;
        case 3: //Marron
            document.getElementById("ColorElejido").value = "Marron";
            break;
        case 4: //Verde
            document.getElementById("ColorElejido").value = "Verde";
            break;
        case 5: //Celeste
            document.getElementById("ColorElejido").value = "Celeste";
            break;
        case 6: //Rojo
            document.getElementById("ColorElejido").value = "Rojo";
            break;
    }
*/


    //Mostrar color en pantalla
    switch (colorRandom) {                                             //Switch es una igualdad estricta
        case 1: //Azul
            colorSecreto = "azul";
            break;
        case 2: //Amarillo
            colorSecreto = "amarillo";
                break;
        case 3: //Marron
            colorSecreto = "marron";
            break;
        case 4: //Verde
            colorSecreto = "verde";
            break;
        case 5: //Celeste
            colorSecreto = "celeste";
            break;
        case 6: //Rojo
            colorSecreto = "rojo";
            break;
    }
	
    //Mostrar color en pantalla
    document.getElementById("ColorElejido").value = colorSecreto;


	

}//FIN DE LA FUNCIÓN

function Responder(colorParametro)
{
    //Declaro las variables para calcular los segundos tardados
    var tiempoFin;
    var tiempoTotal;

    //Capturo la hora cuando se haya presionado un boton
    tiempoFin = new Date();

    //Calculo los segundos que se tardo en presionar el boton
    tiempoTotal = tiempoFin - tiempoInicio;

    //Paso el tiempo total a segundos
    tiempoTotal /= 1000;

    //Validar el color ingresado
    console.log(colorParametro);
    console.log(tiempoTotal);
    
    //Validar el color
    if (colorParametro == colorSecreto) {
        console.log("gano");
        alert("Gano y tardo " + tiempoTotal + " segundos.");
        comenzar();
    } else {
        alert("Ese no es el color correcto, vuelva a intentarlo.");
    }




    /*//Tomar la hora una vez presionado el boton de color
    var tiemporFin = Date.now();

    //Calcular cuanto se tardo en adivinar el color
    var tiempoDiferencia = tiemporFin - tiempoInicio;

    //Dividir por mil para pasar de milisegundos a segundos
    tiempoDiferencia = tiempoDiferencia / 1000;
    console.log(tiempoDiferencia);

    //Mostrar solo numero entero
    tiempoDiferencia = Math.floor(tiempoDiferencia); 

    //Mostrar el resultado en pantalla
    alert("Usted tardo " + tiempoDiferencia + " segundos en adivinar el color.");*/
	


}//FIN DE LA FUNCIÓN
