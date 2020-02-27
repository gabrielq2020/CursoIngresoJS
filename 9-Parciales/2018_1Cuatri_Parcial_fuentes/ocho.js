function mostrar()
{
    var respuesta;
    var numero;
    var letra;
    var contadorCeros;
    var contadorPares;
    var contadorImpares;
    var acumuladorPositivos;

    do {
        do {
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);
        } while (isNaN(numero) || numero < -100 || numero > 100);

        do {
            letra = prompt("Ingrese una letra");
        } while (!isNaN(letra));

        /*//Punto a)
        if (numero % 2 == 0) {
            contadorPares++;
        }

        //Punto b)
        if (numero % 2 != 0) {
            contadorImpares++;
        }*/

        //Punto c)

        if (numero == 0) {              //Punto c)
            contadorCeros++;
        } else {
            if (numero % 2 == 0) {      //Punto a)
                contadorPares++;
            } else {
                contadorImpares++;        //Punto b)
            }
        }

        respuesta = confirm("Desesa continuar?"); //Hacer siempre esto primero
    } while (respuesta)

}
