/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    
    //Declaracion de variables
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var resultado;

    //Obtener los valores por id
    numeroUnoIngresado = document.getElementById("numeroUno").value;    //El dato obtenido es un STRING
    numeroDosIngresado = document.getElementById("numeroDos").value;    //El dato obtenido es un STRING

    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);                   //El dato obtenido es un NUMBER
    numeroDosParseado = parseInt(numeroDosIngresado);                   //El dato obtenido es un NUMBER
    
    //Operacion
    resultado = numeroUnoParseado + numeroDosParseado;
    console.log(numeroUnoParseado);
    console.log(numeroDosParseado);
    
    //Mostrar resultado
    alert("El resultado es " + resultado);




}

