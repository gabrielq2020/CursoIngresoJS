/* Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */

function mostrar()
{
    //Variables datos
    var nota;
    var sexo;
    var contadorNotas = 0;

    //Variables a)
    var promedioNotasTotales;
    var acumuladorNotasTotales = 0;

    //Variables b)
    var notaMasBaja;
    var notaMasBajaSexo;

    //Variables c)
    var contadorVaronesNotasMayorASeis = 0;

    do {
        do {
            nota = prompt("Ingresar la nota del alumno de 0 a 9.")
            nota = parseInt(nota);
        } while (isNaN(nota) || nota == "" || nota < 0 || nota > 10);

        do {
            sexo = prompt("Ingresar el sexo del alumno.")
            sexo = sexo.toLowerCase();
        } while (!isNaN(sexo) || sexo == "" || sexo != "f" && sexo != "m");

        //a) El promedio de las notas totales
        acumuladorNotasTotales += nota;

        //b) La nota más baja y el sexo de esa persona
        if (contadorNotas == 1 || notaMasBaja > nota) {
            notaMasBaja = nota;
            notaMasBajaSexo = sexo;
        }

        //c) La cantidad de varones que su nota haya sido mayor o igual a 6
        if (sexo == "m" && nota >= 6) {
            contadorVaronesNotasMayorASeis++;
        }

        contadorNotas++;
    } while (contadorNotas < 5);

    //a) El promedio de las notas totales
    promedioNotasTotales = acumuladorNotasTotales / contadorNotas;

    document.write("El promedio de las notas totales es " + promedioNotasTotales + "<br>");
    document.write("<br>");
    document.write("La nota más baja y el sexo de esa persona es " + notaMasBajaSexo + " y " + notaMasBajaSexo + "<br>");
    document.write("<br>");
    document.write("La cantidad de varones que su nota haya sido mayor o igual a 6 es " + contadorVaronesNotasMayorASeis + "<br>");
    document.write("<br>");
}