function mostrar() {
    var respuesta;
    var numero;
    var letra;
    var contadorCeros = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorPositivos = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var promedioPositivos;
    var maximo;
    var minimo;
    var primeraVez = true;
    var maximoLetra;
    var minimoLetra;

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




        if (numero % 2 == 0) {      //Punto a)
            contadorPares++;
        } else {
            if (numero % 2 == 1) {  //Punto b)
                contadorImpares++;
            }
        }

        //Punto c)
        if (numero == 0) {
            contadorCeros++;
        }

        //Punto d)
        if (numero > 0) {
            acumuladorPositivos += numero;
            contadorPositivos++;
        }

        //Punto e)
        if (numero < 0) {
            acumuladorNegativos += numero;
        }

        //Punto f)
        if (primeraVez) {               //Flag
            primeraVez = false;
            minimo = numero;
            maximo = numero;
            maximoLetra = letra;
            minimoLetra = letra;
        } else {
            if (numero > maximo) {
                maximo = numero;
                maximoLetra = letra;
            }
            if (numero < minimo) {
                minimo = numero;
                minimoLetra = letra;
            }
        }

        respuesta = confirm("Desesa continuar?"); //Hacer siempre esto primero

    } while (respuesta);

    if (contadorPositivos != 0) {
        promedioPositivos = acumuladorPositivos / contadorPositivos;
    } else {
        promedioPositivos = 0;
    }

    console.log(promedioPositivos);

    document.write("Cantidad de numeros pares: " + contadorPares + "<br>" + "Cantidad de numeros impares: " + contadorImpares + "<br>" + "Cantidad de ceros: " + contadorCeros + "<br>" + "Promedio de numeros positivos: " + promedioPositivos + "<br>" + "Suma de numeros negativos: " + acumuladorNegativos + "<br>");


}


/*if (numero % 2 == 0) {      //Punto a)
    contadorPares++;
} else if (numero == 0) {
    contadorCeros;           //Punto c)
} else {
    contadorImpares++;      //Punto b)
}


if (numero > 0) {
    acumuladorPositivos += numero;
    contadorPositivos++;
} else if (numero < 0) {
    acumuladorNegativos += numero;
}*/

