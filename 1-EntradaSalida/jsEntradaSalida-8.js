/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

    //Declaracion de variables
    var dividendo;
    var divisor;
    var dividendoParseado;
    var divisorParseado;
    var resultado;

    //Obtener los valores por id
    dividendo = document.getElementById("numeroDividendo").value;       //El dato obtenido es un STRING
    divisor = document.getElementById("numeroDivisor").value;           //El dato obtenido es un STRING

    //Parseo de datos
    dividendoParseado = parseInt(dividendo);                            //El dato obtenido es un NUMBER
    divisorParseado = parseInt(divisor);                                //El dato obtenido es un NUMBER
    
    //Operacion
    resultado = dividendoParseado % divisorParseado;
    console.log(dividendoParseado);
    console.log(divisorParseado);
    
    //Mostrar resultado
    alert("El resultado es " + resultado);
	
}
