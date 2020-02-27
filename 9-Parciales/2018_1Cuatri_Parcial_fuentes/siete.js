function mostrar()
{
    //Declarar variables
    var nota;
    var acumuladorNotas;
    var sexo;
    var promedioNotas;
    var notaMasBaja;
    var sexoNotaBaja;
    var contadorVarones = 0;
    var contador = 0;

    //Pedir datos hasta 5 alumnos
    while (contador < 5) {
        contador++;
        console.log(contador);

        //Pedir nota
        nota = prompt("Ingrese la nota.");
        nota = parseInt(nota, 10);

        //Validar nota 0-10
        while (isNaN(nota) || (nota < 0 || nota >10)) {
            nota = prompt("ERROR: La nota debe ser entre 0 y 10.");
            nota = parseInt(nota,10);
        }

        /*do {
            nota = prompt("Pedir nota");
            nota = parseInt(nota);
        } while (isNaN(nota) || nota < 0 || nota > 10);*/

        //Pedir sexo
        sexo = prompt("Ingrese sexo: f o m.");
        sexo = sexo.toLowerCase();

        //Validar sexo
        while (!isNaN(sexo) || sexo != "f" && sexo != "m") {    // f && m porque nunca van a ser falsa las dos
            sexo = prompt("ERROR: El sexo debe ser f o m.");
            sexo = sexo.toLowerCase();
        }

        //Punto a)
        acumuladorNotas += nota;
        acumuladorNotas = parseInt(acumuladorNotas);
        console.log(acumuladorNotas);

        //Punto b)
        if (contador == 1) {
            notaMasBaja = nota;
        
        } else {
            if (nota < notaMasBaja) {
                notaMasBaja = nota;
            }
        }

        //Punto b) opcion 2
        if (nota < notaMasBaja) {
            notaMasBaja = nota;

            sexoNotaBaja = sexo;
        }

        //Punto c)
        if (nota >= 6 && sexo == "m") {
             contadorVarones++;
        }

    }

    promedioNotas = acumuladorNotas / contador;


}
