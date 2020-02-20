function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0;

while (clave.toLowerCase() != "utn750" && contador < 3) {
    contador++;
    clave = prompt("ERROR: ingrese el número clave."); 
}

if (contador == 3) {
    alert("Intentos maximos ingresados")
} else {
    alert("Bienvenido");
}


}//FIN DE LA FUNCIÓN
