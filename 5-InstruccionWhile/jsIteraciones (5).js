function mostrar()
{

    var sexo = prompt("ingrese f ó m .");

    while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m") {
        sexo = prompt("ERROR: Ingrese f o m.");    
    }


document.getElementById('Sexo').value = sexo.toLowerCase();

}//FIN DE LA FUNCIÓN