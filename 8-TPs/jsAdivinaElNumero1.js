/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos = 0;





function comenzar()
{
  var max;
  var min;
  
  //Generar número RANDOM entre 1 y 100
  max = 101;
  min = 1;

  numeroSecreto = Math.floor(Math.random() * (max - min)) + min;
  console.log(numeroSecreto);

 
  
}




function verificar()
{
  var numeroIngresado;
  var contador; 
  
  contadorIntentos = contadorIntentos + 1;
  console.log(contadorIntentos);
  
  document.getElementById("intentos").value = contadorIntentos;
  
  //Obtener datos por Id
  numeroIngresado = document.getElementById("numero").value;
  
  //Comparar el numero ingresado con el numero random
  if (numeroIngresado == numeroSecreto) {
    alert("Usted es un ganador y en solo " + contadorIntentos + " intentos");
  } else {
    if (numeroIngresado > numeroSecreto) {
      alert("Se paso del numero secreto");
    } else {
      alert("Falta para llegar al numero secreto"); 
    }
    
    

  }
	
}