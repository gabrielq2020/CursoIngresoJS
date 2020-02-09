/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;
var precioUnoParseo;
var precioDosParseo;
var precioTresParseo;
var suma;
var promedio;
var iva;

function Sumar () 
{    
    //Obtener datos por Id
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;

    //Parseo de datos
    precioUnoParseo = parseInt(precioUno);
    precioDosParseo = parseInt(precioDos);
    precioTresParseo = parseInt(precioTres);

    //Operacion
    suma = precioUnoParseo + precioDosParseo + precioTresParseo;
    console.log(suma);

    //Mostrar resultado
    alert("La suma de los productos ingresados es: " + suma);	
}

function Promedio () 
{
    //Obtencion de dato por Id
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;

    //Parseo de datos
    precioUnoParseo = parseInt(precioUno);
    precioDosParseo = parseInt(precioDos);
    precioTresParseo = parseInt(precioTres);

    //Operacion
    suma = precioUnoParseo + precioDosParseo + precioTresParseo;
    promedio = suma / 3;
    console.log(suma);
    console.log(promedio);

    //Mostrar resultado
    alert("El promedio de los precios ingresados es " + promedio);    
}

function PrecioFinal () 
{
    //Obtencion de datos por Id
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres"). value;

    //Parseo de datos
    precioUnoParseo = parseInt(precioUno);
    precioDosParseo = parseInt(precioDos);
    precioTresParseo = parseInt(precioTres);

    //Operacion
    suma = precioUnoParseo + precioDosParseo + precioTresParseo;
    iva = suma * 1.21;
    console.log(iva);

    //Mostrar resultado
    alert("El precio final mas el IVA es " + iva);	
}