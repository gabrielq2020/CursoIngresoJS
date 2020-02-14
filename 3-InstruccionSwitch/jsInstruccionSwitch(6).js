function mostrar()
{
//tomo la edad  
    var laHora = document.getElementById('hora').value;
    var horaParseada;

    horaParseada = parseInt(laHora);

    if (horaParseada >= 25) {
        alert("Hora ingresada invalida");
    } else {
        switch (horaParseada) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                alert("Es de mañana.");
                break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                alert("Es de mañana.");
                break;
            
            default:
                break;
        }
        
    }



}//FIN DE LA FUNCIÓN