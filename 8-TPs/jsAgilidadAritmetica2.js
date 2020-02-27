/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var numeroRandom1;
var numeroRandom2;
var operacionRandom;
var resultado;

function comenzar()
{
    //Generar numeros random
    var max = 11;
    var min = 1;

    numeroRandom1 = Math.floor(Math.random() * (max-min)) + min;
    numeroRandom2 = Math.floor(Math.random() * (max-min)) + min;

    //Mostrar en pantalla numeros random
    document.getElementById("PrimerNumero").value = numeroRandom1;
    document.getElementById("SegundoNumero").value = numeroRandom2;

    //Generar operacion random
    var maxOperador = 5;
    var minOperador = 1;

    operacionRandom = Math.floor(Math.random() * (maxOperador - minOperador)) + minOperador;

    //Mostrar en pantalla operador random
    switch (operacionRandom)
    {
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

//Ejecutar de forma forzada funcion Responder despues de 4 segundos
setTimeout(Responder, 4000);  //Ejecuta la funcion solo una vez

function Responder()
{
    //Obtener dato por id
    respuesta = document.getElementById("Respuesta").value;
    respuesta = parseInt(respuesta);

    //Vealidar dato ingresado
    while (isNaN(respuesta)) {
        respuesta = prompt("Han pasado 4 segundos y no ha ingresado ningun valor, por favor ingrese una respuesta numerica.");
        respuesta = parseInt(respuesta);
        document.getElementById("Respuesta").value = respuesta;
    }

    //Calcular resultado
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

    //Mostrar resultado en pantalla
    if (respuesta == resultado){
        alert("Su respuesta es correcta");
    } else {
        alert("Su respuesta es incorrecta, el resultado es " + resultado);
    }

}//FIN DE LA FUNCIÓN
