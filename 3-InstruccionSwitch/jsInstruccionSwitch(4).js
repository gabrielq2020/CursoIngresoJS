function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
            alert("Este mes tiene 28 días");
            break;
        case "Abril":
            alert("Este mes tiene 30 días");
            break;
        case "Junio":
            alert("Este mes tiene 30 días");
            break;
        case "Septiembre":
            alert("Este mes tiene 30 días");
            break;
        case "Noviembre":
            alert("Este mes tiene 30 días");
            break;
        default:
            alert("Este mes tiene 31 días");
            break;
    }
	
	



}//FIN DE LA FUNCIÓN