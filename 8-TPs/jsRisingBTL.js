/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

//Declarar variables
var edad;
var sexo;
var estadoCivil;
var sueldo;
var legajo;
var nacionalidad;

function ComenzarIngreso () 
{
    //Obtener edad por prompt
    edad = prompt("Ingrese edad.");
    edad = parseInt(edad);
    document.getElementById("Edad").value = "Edad: " + edad;    

    //Validar edad
    while (isNaN(edad) || (edad < 18 || edad > 90)) {
        edad = prompt("Ingrese su edad (Solo numeros y debe tener entre 18 y 90 años).");
        document.getElementById("Edad").value = "Edad: " + edad;
        edad = parseInt(edad);
    }
    
    //Obtener sexo prompt
    sexo = prompt("Ingrese sexo.");
    sexo = sexo.toUpperCase();

    //Mostrar sexo en pantalla
    if (sexo == "F") {
        document.getElementById("Sexo").value = "Sexo: femenino"
    } else {
        document.getElementById("Sexo").value = "Sexo: masculino"
    }

    //Validar sexo
    while (!isNaN(sexo) || (sexo != "F" && sexo != "M")) {
        sexo = prompt("Ingrese F para femenino o M para masculino.")
        sexo = sexo.toUpperCase();
        if (sexo == "F") {
            document.getElementById("Sexo").value = "Sexo: femenino"
        } else {
            document.getElementById("Sexo").value = "Sexo: masculino"
        }
    }

    //Obtener estado civil por prompt
    estadoCivil = prompt("Ingrese estado civil: 1 si es soltero, 2 si es casado, 3 si es divorciado o 4 si es viudo.");

    //Validar estado civil
    estadoCivil = parseInt(estadoCivil);

    while (isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4) {
        estadoCivil = prompt("Ingrese estado civil: 1 si es soltero, 2 si es casado, 3 si es divorciado o 4 si es viudo.");
        estadoCivil = parseInt(estadoCivil);
    }

    //Mostrar en pantalla estado civil
    switch (estadoCivil) {
        case 1:
            document.getElementById("EstadoCivil").value = "Estado civil: soltero."
            break;
        case 2:
            document.getElementById("EstadoCivil").value = "Estado civil: casado."
            break;
        case 3:
            document.getElementById("EstadoCivil").value = "Estado civil: divorciado."
            break;
        case 4:
            document.getElementById("EstadoCivil").value = "Estado civil: viudo."
            break;
    }

    //Obtener sueldo bruto por prompt
    sueldo = prompt("Ingrese sueldo");
    sueldo = parseInt(sueldo);
    document.getElementById("Sueldo").value = "Sueldo: " + sueldo;

    //Validar sueldo
    while (isNaN(sueldo) || sueldo < 8000) {
        sueldo = prompt("El sueldo debe estar expresado en numero y ademas debe ser mayor a 8000.");
        sueldo = parseInt(sueldo);
        document.getElementById("Sueldo") = "Sueldo: " + sueldo;
    }


}
