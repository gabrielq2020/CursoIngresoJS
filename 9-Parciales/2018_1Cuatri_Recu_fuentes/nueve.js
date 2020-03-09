/* Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero. */

function mostrar()
{
    //Variables datos
    var nombre;
    var peso;
    var temperatura;
    var respuesta = true;

    //Variables a)
    var contadorTemperaturasPares = 0;

    //Variables b)
    var animalMasPesadoPeso;
    var animalMasPesadoNombre;
    var animalMasPesadoTemperatura;

    //Variables c)
    var contadorAnimalesBajoCero = 0;

    //Variables d)
    var promedioPesoAnimales;
    var acumuladorPesoAnimales = 0;
    var contadorTotalAnimales = 0;

    //Variables f)
    var pesoMaximoTemperaturaBajoCero;
    var pesoMinimoTemperaturaBajoCero;

    do {
        do {
            nombre = prompt("Ingresar el nombre del animal")
        } while (!isNaN(nombre) || nombre == "");

        do {
            peso = prompt("Ingresar la peso del animal (de 1 a 1000).")
            peso = parseInt(peso);
        } while (isNaN(peso) || peso == "" || peso < 1 || peso > 1000);

        do {
            temperatura = prompt("Ingresar la temperatura del habitat (entre -30 y 30).")
            temperatura = parseInt(temperatura);
        } while (isNaN(temperatura) || temperatura == "" || temperatura < -30 || temperatura > 30);

        //a) La cantidad de temperaturas pares
        if (temperatura % 2 == 0) {
            contadorTemperaturasPares++;
        }

        //b) El nombre y temperatura del animal más pesado
        if (contadorTotalAnimales == 1 || animalMasPesadoPeso < peso) {
            animalMasPesadoPeso = peso;
            animalMasPesadoTemperatura = temperatura;
            animalMasPesadoNombre = nombre;
        }

        //c) La cantidad de animales que viven a menos de 0 grados
        if (temperatura < 0) {
            contadorAnimalesBajoCero++;
        }
        
        //d) El promedio del peso de todos los animales
        acumuladorPesoAnimales += peso;
        contadorTotalAnimales++;

        //f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero
        if (contadorTotalAnimales == 1 && temperatura < 0) {
            pesoMaximoTemperaturaBajoCero = peso;
            pesoMinimoTemperaturaBajoCero = peso;
        }

       if (pesoMaximoTemperaturaBajoCero < peso) {
            pesoMaximoTemperaturaBajoCero = peso;
       } else {
           if (pesoMinimoTemperaturaBajoCero > peso) {
                pesoMinimoTemperaturaBajoCero = peso;
           }
       }

        respuesta = confirm("Desea hacer otro ingreso?");
    } while (respuesta);

    //d) El promedio del peso de todos los animales
    promedioPesoAnimales = acumuladorPesoAnimales / contadorTotalAnimales;
    console.log(acumuladorPesoAnimales);
    console.log(contadorTotalAnimales);

    document.write("La cantidad de temperaturas pares es " + contadorTemperaturasPares + "<br>");
    document.write("<br>");
    document.write("El nombre y temperatura del animal más pesado es " + animalMasPesadoNombre + " y " + animalMasPesadoTemperatura + "<br>");
    document.write("<br>");
    document.write("La cantidad de animales que viven a menos de 0 grados es " + contadorAnimalesBajoCero + "<br>");
    document.write("<br>");
    document.write("El promedio del peso de todos los animales es " + promedioPesoAnimales + "<br>");
    document.write("<br>");
    document.write("El peso máximo de todos los animales cuyas temperaturas sean bajo cero es " + pesoMaximoTemperaturaBajoCero + "<br>");
    document.write("<br>");
    document.write("El peso mínimo de todos los animales cuyas temperaturas sean bajo cero es " + pesoMinimoTemperaturaBajoCero + "<br>");
    document.write("<br>");

}