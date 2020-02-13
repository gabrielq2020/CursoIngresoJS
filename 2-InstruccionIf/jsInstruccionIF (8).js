function mostrar()
{
//tomo la edad  
var ingreseEdad;
var ingreseEstado;

ingreseEdad = document.getElementById("edad").value;
ingreseEstado = document.getElementById("estadoCivil").value;

/*if(ingreseEdad <18 && ingreseEstado != "Soltero"){
    alert("Es muy pequeño para NO ser soltero");
    } else {

    }
*/

if(ingreseEdad >=18 && ingreseEstado == "Soltero"){
    alert("Es soltero y no es menor");
}	


}//FIN DE LA FUNCIÓN