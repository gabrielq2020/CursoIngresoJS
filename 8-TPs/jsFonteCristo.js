/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
    //Declarar variable
    var numeroIngresado;

    //Solicitar numero por prompt
    numeroIngresado = document.getElementById("numero").value;
    numeroIngresado = parseInt(numeroIngresado);

    //Validar el dato ingresado
    while (isNaN(numeroIngresado) || numeroIngresado > 0) {
        numeroIngresado = prompt("ERROR: Ingresar solo numeros positivos");
        numeroIngresado = parseInt(numeroIngresado);

    }

}

function NumerosPares ()
{
    var contadorPar = 0;

    if (numeroIngresado % 2 == 0) {
        contadorPar++;
    }
}

function NumerosImpares ()
{
    var contadorImpar = 0;
    
    if (numeroIngresdo % 2 != 0) {
        contadorImpar++;
    }
}

function NumerosDivisibles ()
{



}

function VerificarPrimos ()
{



}

function NumerosPrimos ()
{



}

