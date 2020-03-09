/* Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino */

function mostrar()
{
    //Variables datos
    var nombre;
    var edad;
    var sexo;
    var notaFinal;
    var respuesta = true;

    //Variables a)
    var contadorVarones = 0;

    //Variables b)
    var promedioNotaMenoresEdad;
    var acumuladorNotaMenoresEdad = 0;
    var contadorMenoresEdad = 0;

    //Variables c)
    var promedioNotaAdolescentes;
    var acumuladorNotaAdolescentes = 0;
    var contadorAdolescentes = 0;

    //Variables d)
    var promedioNotaMayores;
    var acumuladorNotaMayores = 0;
    var contadorMayores = 0;

    //Variables f)
    var promedioNotasFemenino;
    var acumuladorNotasFemenino = 0;
    var contadorFemenino = 0;
    var promedioNotasMasculino;
    var acumuladorNotasMasculino = 0;
    var contadorMasculino = 0;



    do {
        
        do {
            nombre = prompt("Ingresar el nombre");
            nombre = nombre.toLowerCase();
        } while (!inNaN(nombre) || nombre == "");

        do {
            edad = prompt("Ingresar la edad");
            edad = parseInt(edad);
        } while (inNaN(edad) || edad == "" || edad < 0 || edad > 10000);

        do {
            sexo = prompt("Ingresar el sexo (f para femenino o m para masculino)");
            sexo = sexo.toLowerCase();
        } while (!inNaN(sexo) || sexo == "" || sexo != "f" && sexo != "m");

        do {
            notaFinal = prompt("Ingresar los notaFinal de alimento");
            notaFinal = parseInt(notaFinal);
        } while (inNaN(notaFinal) || notaFinal == "" || notaFinal < 0 || notaFinal > 10);

        //a) La cantidad de varones aprobados
        if (sexo == "m" && notaFinal > 6)
        {
            contadorVarones++;
        }

        //b) El promedio de notas de los menores de edad
        if (edad < 18)
        {
            acumuladorNotaMenoresEdad = notaFinal;
            contadorMenoresEdad++;            
        }

        //c) El promedio de notas de los adolescentes
        if (edad > 13 && edad < 18)
        {
            acumuladorNotaAdolescentes = notaFinal;
            contadorAdolescentes++;            
        }

        //d) El promedio de notas de los mayores
        if (edad > 18)
        {
            acumuladorNotaMayores += notaFinal;
            contadorMayores++;
        }


        //f) El promedio de notas por sexo masculino y femenino
        if (sexo == "f")
        {
            acumuladorNotasFemenino += notaFinal;
            contadorFemenino++;
        } else
          {
            acumuladorNotasMasculino += notaFinal;
            contadorMasculino++;
          }

          respuesta = confirm("Desea realizar otro ingreso?");
    } while (respuesta);

    //b) El promedio de notas de los menores de edad
    if (contadorMenoresEdad == 0)
    {
        promedioNotaMenoresEdad = "No ingresaron menores de edad.";
    } else
      {
        promedioNotaMenoresEdad = acumuladorNotaMenoresEdad / contadorMenoresEdad;
      }

    //c) El promedio de notas de los adolescentes
    if (contadorAdolescentes == 0)
    {
        promedioNotaAdolescentes = "No ingresaron adolescentes.";
    } else
      {
        promedioNotaAdolescentes = acumuladorNotaAdolescentes / contadorAdolescentes;
      }

    //d) El promedio de notas de los mayores
    if (contadorMayores == 0)
    {
        promedioNotaMayores = "No ingresaron mayores.";
    } else
      {
        promedioNotaMayores = acumuladorNotaMayores / contadorMayores;
      }

    //f) El promedio de notas por sexo masculino y femenino
    if (contadorFemenino == 0)
    {
        promedioNotaFemenino = "No ingresaron estudiantes femeninas.";
    } else
      {
        promedioNotaFemenino = acumuladorNotaFemenino / contadorFemenino;
      }
    if (contadorMasculino == 0)
    {
        promedioNotaMasculino = "No ingresaron estudiantes masculinos.";
    } else
      {
        promedioNotaMasculino = acumuladorNotaMasculino / contadorMasculino;
      }


    document.write("La cantidad de varones aprobados es " + contadorVarones + "<br>");
    document.write("<br>");
    document.write("El promedio de notas de los menores de edad es " + promedioNotaMenoresEdad + "<br>");
    document.write("<br>");
    document.write("El promedio de notas de los adolescentes es " + promedioNotaAdolescentes + "<br>");
    document.write("<br>");
    document.write("El promedio de notas de los mayores es " + promedioNotaMayores + "<br>");
    document.write("<br>");
    document.write("El promedio de notas del sexo femenino es " + promedioNotasFemenino + "<br>");
    document.write("<br>");
    document.write("El promedio de notas del sexo masculino es " + promedioNotasMasculino + "<br>");
    document.write("<br>");

}