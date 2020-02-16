/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var numeroRandom;
var max;
var min;

max = 4;
min = 1;

function comenzar()
{
    numeroRandom = Math.floor((Math.random() * (max-min)) + min);
    console.log(numeroRandom);

}//FIN DE LA FUNCIÓN

function piedra()
{
    switch (numeroRandom) {
        case 1:
            alert("Usted empato");
            break;
        case 2:
            alert("Usted perdio");
            break;
        case 3:
            alert("Usted gano");
            break;
    }
	

}//FIN DE LA FUNCIÓN

function papel()
{
    switch (numeroRandom) {
        case 1:
            alert("Usted gano");
            break;
        case 2:
            alert("Usted empato");
            break;
        case 3:
            alert("Usted perdio");
            break;
    }

}//FIN DE LA FUNCIÓN

function tijera()
{
    switch (numeroRandom) {
        case 1:
            alert("Usted perdio");
            break;
        case 2:
            alert("Usted gano");
            break;
        case 3:
            alert("Usted empato");
            break;
    }

}//FIN DE LA FUNCIÓN