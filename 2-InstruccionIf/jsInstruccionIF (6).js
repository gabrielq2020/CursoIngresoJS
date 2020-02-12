function mostrar() {
//tomo la edad  
var ingreseEdad;

ingreseEdad = document.getElementById("edad").value;

if (ingreseEdad > 17) {
    alert("Usted es mayor de edad");
} else {
    // Nº de 17 a -infinito, los mayores a 17 quedaron en la condicion anterior "if"
    if (ingreseEdad > 13) {
        alert("Usted es adolescente");
    } else {
        // Nº de 12 a -infinito, los mayores a 12 quedaron en el "else"
        alert("Usted es menor de edad");
    }
}

}



//FIN DE LA FUNCIÓN