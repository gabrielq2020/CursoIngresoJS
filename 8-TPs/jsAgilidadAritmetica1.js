/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var resultado;
var numeroRandom1;
var numeroRandom2;
var operacionRandom;
var resultado;


function comenzar()
{
    //Generar numero random
    var max = 11;
    var min = 1;
    
    numeroRandom1 = Math.floor(Math.random() * (max - min)) + min;
    console.log(numeroRandom1);

    numeroRandom2 = Math.floor(Math.random() * (max - min)) + min;
    console.log(numeroRandom2);

    //Mostrar numero random en pantalla
    document.getElementById("PrimerNumero").value = numeroRandom1;
    document.getElementById("SegundoNumero").value = numeroRandom2;
    
    //Generar operacion random
    var operacionMax = 5;
    var operacionMin = 1;

    operacionRandom = Math.floor(Math.random() * (operacionMax - operacionMin)) + operacionMin;
    console.log(operacionRandom);

    //Mostrar operacion random en pantalla
    switch (operacionRandom) {
        case 1: //Suma
            document.getElementById("Operador").value = "+";
            break;

        case 2: //Resta
            document.getElementById("Operador").value = "-";
            break;

        case 3: //Multiplicacion
            document.getElementById("Operador").value = "*";
            break;

        case 4: //Division
            document.getElementById("Operador").value = "/";
            break;
    }
    
}//FIN DE LA FUNCIÓN
function Responder()
{
    //Operacion
    switch (operacionRandom) {
        case 1: //Suma
            resultado = numeroRandom1 + numeroRandom2;
            break;

        case 2: //Resta
            resultado = numeroRandom1 - numeroRandom2;
            break;

        case 3: //Multiplicacion
            resultado = numeroRandom1 * numeroRandom2;
            break;

        case 4: //Division
            resultado = numeroRandom1 / numeroRandom2;
            break;
    }

    //Obtener respuesta del usuario por id
    respuesta = document.getElementById("Respuesta").value;

    //Comparar respuesta con resultado y mostrar en pantalla
    if (respuesta == resultado) {
        alert("Su respuesta es correcta.");
    } else {
        alert("Su respuesta es incorrecta, vuelva a intentarlo.");
    }

}//FIN DE LA FUNCIÓN
