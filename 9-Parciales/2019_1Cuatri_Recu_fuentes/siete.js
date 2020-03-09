/* Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne */

function mostrar()
{
    var kilos;
    var sabor;
    var contadorAlimentos = 0;

    //Variables a)
    var promedioKilosTotal;
    var acumuladorKilos = 0;

    //Variables b)
    var alimentoMasLivianoKilos;
    var alimentoMasLivianoSabor;

    //Variables c)
    var promedioSaborCarne;
    var acumuladorKilosSaborCarne = 0;


    do {
        contadorAlimentos++;

        do {
            kilos = prompt("Ingresar los kilos de alimento");
            kilos = parseInt(kilos);
        } while (isNaN(kilos) || kilos == "" || kilos < 0 || kilos > 500);

        do {
            sabor = prompt("Ingresar el sabor del alimento (carne, vegetales o pollo)");
            sabor = sabor.toLowerCase();
        } while (!isNaN(sabor) || sabor == "" || sabor != "carne" && sabor != "vegetales" && sabor != "pollo");

        //a) El promedio de los kilos totales.
        acumuladorKilos += kilos;

        //b) El mas liviano y su sabor.
        if (contadorAlimentos == 1 || alimentoMasLivianoKilos > kilos)
        {
            alimentoMasLivianoKilos = kilos;
            alimentoMasLivianoSabor = sabor;
        }

        //c) La cantidad de sabor carne y el promedio de kilos de sabor carne.
        if (sabor == "carne") {
            acumuladorKilosSaborCarne += kilos;
        }

    } while (contadorAlimentos < 10);

    //a) El promedio de los kilos totales
    promedioKilosTotal = acumuladorKilos / contadorAlimentos;

    //c) La cantidad de sabor carne y el promedio de kilos de sabor carne
    promedioSaborCarne = acumuladorKilos / acumuladorKilosSaborCarne;

    document.write("El promedio de los kilos totales es " + promedioKilosTotal + "<br>");
    document.write("<br>");
    document.write("El mas liviano es " + alimentoMasLivianoKilos + " y su sabor es " + alimentoMasLivianoSabor + "<br>");
    document.write("<br>");
    document.write("La cantidad de sabor carne es " + acumuladorKilosSaborCarne + " y el promedio de kilos de sabor carne es " + promedioSaborCarne + "<br>");
    document.write("<br>");
}
