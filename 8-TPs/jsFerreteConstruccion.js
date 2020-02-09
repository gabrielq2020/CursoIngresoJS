/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//Declarar variables generales
var largo;
var ancho;
var radio;

function Rectangulo () 
{
    //Declarar variables
    var perimetroRectangulo;
    var resultadoRectangulo;

    //Obtener datos de Id
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    //Operacion
    perimetro = largo * 2 + ancho * 2;
    resultadoRectangulo = perimetro * 3;

    //Mostrar resultado
    alert("La cantidad de alambre necesaria es " + resultadoRectangulo);
}

function Circulo () 
{
    //Declarar variables
    var perimetroCirculo;
    var resultadoCirculo;

    //Obtener datos por Id
    radio = document.getElementById("Radio").value;

    //Calculo perimetro > C = D * 3.14159 = (2*R) * 3.14159 = 6.28318 * R
    perimetroCirculo = radio * 18.84954;
    console.log(perimetroCirculo);

    //Calculo resultado > (6.28318 * R) * 3 = 18.84954 * R
    resultadoCirculo = perimetroCirculo * 3;

    //Mostrar resultado
    alert("La cantidad de alambre necesaria es " + resultadoCirculo);	
}

function Materiales () 
{
    //Declarar variables
    var metrosCuadrado;
    var cementoM2;
    var calM2;

    //Obtener datos por Id
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    //Calculo metros cuadrados
    metrosCuadrado = largo * ancho;
    
    //Calculo materiales por m2 (1m2 = 2 Cemento + 3 Cal)

    //Calculo cemento
    cementoM2 = metrosCuadrado * 2;

    //Calculo cal
    calM2 = metrosCuadrado * 3;

    //Mostrar resultado
    alert("Para el contrapiso necesita " + cementoM2 + " bolsas de cemento y " + calM2 + " bolsas de cal");	
}