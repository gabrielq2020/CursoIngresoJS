function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var horaParseada;

horaParseada = parseInt(laHora);

    if (horaParseada >= 25) {
        alert("Hora ingresada no valida");
    } else {

    switch (horaParseada) {
        case 7:
            alert("Es de mañana.");
            break;
        case 8:
            alert("Es de mañana.");
            break;
        case 9:
            alert("Es de mañana.");
            break;
        case 10:
            alert("Es de mañana.");
            break;
        case 11:
            alert("Es de mañana.");
        default:
            break;
    }
    }
	
	



}//FIN DE LA FUNCIÓN