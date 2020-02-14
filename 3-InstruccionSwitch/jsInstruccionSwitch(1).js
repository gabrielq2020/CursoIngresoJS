function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Enero":
            alert("Que comiences bien el año!!!");
            break;
        case "Marzo":
            alert("A clases!!!");
            break;
        case "Julio":
            alert("Se vienen las vacaciones!!!");
        case "Diciembre":
            alert("Felices fiesta!!!");
            break;
        default:
            alert("No hay evento reconocido en este mes");
            break;
    }



}//FIN DE LA FUNCIÓN