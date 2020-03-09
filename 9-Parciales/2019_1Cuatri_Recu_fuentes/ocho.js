/* Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color */

function mostrar()
{
    var color;
    var valor;
    var respuesta = true;

    //Variables a)
    var contadorColorRojo = 0;

    //Variables b)
    var contadorRojoPrecioMayor = 0;

    //Variables c)
    var contadorVehiculosPrecioInferior = 0;

    //Variables e)
    var contadorVehiculos = 0;
    var vehiculoMasCaroPrecio;
    var vehiculoMasCaroColor;

    do {
        
        do {
            color = prompt("Ingresar el color del vehiculo (rojo, verde o amarillo)");
            color = color.toLowerCase();
        } while (!inNaN(color) || color == "" || color != "rojo" && color != "verde" && color != "amarillo");

        do {
            kilos = prompt("Ingresar los kilos de alimento");
            kilos = parseInt(kilos);
        } while (inNaN(kilos) || kilos == "" || kilos < 0 || kilos > 10000);

        //a) La cantida de rojos
        if (color == "rojo") {
            contadorColorRojo++;
        }

        //b) La cantidad de rojos con precio mayor a 5000
        if (color == "rojo" && precio > 5000) {
            contadorRojoPrecioMayor++;
        }

        //c) La cantidad de vehiculos con precio inferior a 5000
        if (precio < 5000) {
            contadorVehiculosPrecioInferior++;
        }

        //e) El mas caro y su color
        contadorVehiculos++;
        if (contadorVehiculos == 1 || vehiculoMasCaroPrecio < precio) {
            vehiculoMasCaroPrecio = precio;
            vehiculoMasCaroColor = color;            
        }

        respuesta = confirm("Desea realizar otro ingreso?");
    } while (respuesta);


    document.write("La cantida de vehiculos rojos es " + contadorColorRojo + "<br>");
    document.write("<br>");
    document.write("La cantidad de rojos con precio mayor a 5000 es " + contadorRojoPrecioMayor + "<br>");
    document.write("<br>");
    document.write("La cantidad de vehiculos con precio inferior a 5000 es " + contadorVehiculosPrecioInferior + "<br>");
    document.write("<br>");
    document.write("El mas caro y su color es " + vehiculoMasCaroPrecio + " de color " + vehiculoMasCaroColor + "<br>");
    document.write("<br>");

}
