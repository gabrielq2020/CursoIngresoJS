function mostrar()
{
    var respuesta;
    var marca;
    var peso;
    var temperatura;
    var contadorTemperaturaPar = 0;
    var primeraVez = true;
    var maximoMarca;
    var maximoPeso;
    var minimoPeso;
    var contadorMenosCero = 0;
    var acumuladorPeso = 0;
    var contadorPeso = 0;
    var promedioPeso;


    do {
        //Obtener marca y validar
        do {
            marca = prompt("Ingrese la marca.");
        } while (marca == "" || !isNaN(marca));

        //Obtener peso y validar
        do {
            peso = prompt("Ingrese un peso entre 1 y 100.");
            peso = parseInt(peso);            
        } while (isNaN(peso) || peso < 1 || peso > 100);

        //
        do {
            temperatura = prompt("Ingrese una temperatura entre -30 y 30.")
            temperatura = parseInt(temperatura);
        } while (isNaN(temperatura) || temperatura < -30 || temperatura > 30);

        //Punto a)                          //Cantidad de temperaturas pares
        if (temperatura % 2 == 0) {
            contadorTemperaturaPar++;
        }

        //Punto b)
        if (primeraVez) {                   //FLag - Evaluar por primera vez
            primeraVez = false;             //Cambio a false para que este if solo se ejecute una vez
            maximoMarca = marca;
            minimoMarca = marca;
            maximoPeso = peso;
            minimoPeso = peso;
        } else {                            //Punto f)
            if (peso > maximoPeso) {
                maximoPeso = peso;
                maximoMarca = marca;
            } else if (peso < minimoPeso) { //Punto f)
                minimoPeso = peso;
            }
        }

        //Punto c)
        if (temperatura < 0) {
            contadorMenosCero++;
        }

        //Punto d)
        contadorPeso++;     //El contador va siempre despues de la validacion de datos, porque sino estoy contando todos los casos, los ingresos correctos y los incorrectos.
        acumuladorPeso += peso;     //Tanto contador y acumulador si lo pongo despues del while general va a contar una sola vez y va a sumar el ultiimo peso.
        console.log(contadorPeso);

        respuesta = confirm("Desea continuar?");    //Primero siempre asegurar que el usuario decide la cantidad

    } while (respuesta);

            

//Punto d)      // Los calculos los hago fuera del while general porque hay que esperar que el usuario decida la cantidad de datos a ingresar y ahi recien con todos los datos ingresados hagos los calculos
if (contadorPeso > 0) {
    promedioPeso = acumuladorPeso / contadorPeso;
} else {
    promedioPeso = alert("No ingreso ningun producto.");
}


document.write("Cantidad de temperaturas pares: " + contadorTemperaturaPar + "<br>" + "Marca del producto mas pesado: " + maximoMarca + "<br>" + "Cantidad de productos que se conservan a menos de 0 grados: " + contadorMenosCero + "<br>" + "Promedio de los pesos de todos los productos: " + promedioPeso + "<br>" + "Peso maximo: " + maximoPeso + "<br>" + "Peso minimo: " + minimoPeso + "<br>");

document.write("Cantidad de temperaturas pares: " + contadorTemperaturaPar + "<br>");
document.write("Marca del producto mas pesado: " + maximoMarca + "<br>");
document.write("Cantidad de productos que se conservan a menos de 0 grados: " + contadorMenosCero + "<br>");
document.write("Promedio de los pesos de todos los productos: " + promedioPeso + "<br>");
document.write("Peso maximo: " + maximoPeso + "<br>");
document.write("Peso minimo: " + minimoPeso + "<br>");




}



