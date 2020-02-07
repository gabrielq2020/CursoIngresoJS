/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

    //Declaracion de variables globales
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var resultado;


function sumar()
{	
   
    //Obtener los valores por Id
    numeroUnoIngresado = document.getElementById("numeroUno").value;    //Dato = STRING
    numeroDosIngresado = document.getElementById("numeroDos").value;    //Dato = STRING

    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);                   //Dato = NUMBER
    numeroDosParseado = parseInt(numeroDosIngresado);                   //Dato = NUMBER

    //Operación
    resultado = numeroUnoParseado + numeroDosParseado;
    console.log(numeroUnoParseado);
    console.log(numeroDosParseado);

    //Mostrar resultado
    alert("La suma es " + resultado);

}

function restar()
{
        
    //Obtener los valores por Id
    numeroUnoIngresado = document.getElementById("numeroUno").value;    //Dato = STRING
    numeroDosIngresado = document.getElementById("numeroDos").value;    //Dato = STRING

    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);                   //Dato = NUMBER
    numeroDosParseado = parseInt(numeroDosIngresado);                   //Dato = NUMBER

    //Operación
    resultado = numeroUnoParseado - numeroDosParseado;
    console.log(numeroUnoParseado);
    console.log(numeroDosParseado);

    //Mostrar resultado
    alert("La resta es " + resultado);
	
}

function multiplicar()
{
    
    //Obtener los valores por Id
    numeroUnoIngresado = document.getElementById("numeroUno").value;    //Dato = STRING
    numeroDosIngresado = document.getElementById("numeroDos").value;    //Dato = STRING

    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);                   //Dato = NUMBER
    numeroDosParseado = parseInt(numeroDosIngresado);                   //Dato = NUMBER

    //Operación
    resultado = numeroUnoParseado * numeroDosParseado;
    console.log(numeroUnoParseado);
    console.log(numeroDosParseado);

    //Mostrar resultado
    alert("La multiplicacion es " + resultado); 
	
}

function dividir()
{
    
    //Obtener los valores por Id
    numeroUnoIngresado = document.getElementById("numeroUno").value;    //Dato = STRING
    numeroDosIngresado = document.getElementById("numeroDos").value;    //Dato = STRING

    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);                   //Dato = NUMBER
    numeroDosParseado = parseInt(numeroDosIngresado);                   //Dato = NUMBER

    //Operación
    resultado = numeroUnoParseado / numeroDosParseado;
    console.log(numeroUnoParseado);
    console.log(numeroDosParseado);

    //Mostrar resultado
    alert("La division es " + resultado);
	
}

