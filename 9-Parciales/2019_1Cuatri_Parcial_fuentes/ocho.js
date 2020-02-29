function mostrar()
{
  var respuesta = true;

  //Variables para el ingreso de los datos
  var nombre;
  var cantidadDePersonas;
  var cantidadDeDiasDeEstadia;
  var formaDePago;


  var maximoCantidadDePersonas;
  var maximoNombreHuesped;

  var contadorPago;
  var acumuladorDeDias = 0;
  var contadorDias = 0;

  //Variables para contar formas de pago
  var contadorEfectivo = 0;
  var contadorTarjeta = 0;
  var contadorQR = 0;
  var formaDePagoMasUsada;

  var contadorDeReserva = 0;

  //Variables para promedio de maximo de días
  var maximoDeDias;
  var maximoDeDiasCantidadPersonas;
  var promedio;



  do {
        //Con cada carga de datos cuento un ingreso
        contadorDeReserva++;
        console.log(contadorDeReserva);

        //Obtener y validar dato del nombre del huesped.
        do {
          nombre = prompt("Ingrese el nombre del huesped.");
        } while (nombre == "" || !isNaN(nombre));

        //Obtener y validar dato de cantidad de huespedes.
        do {
          cantidadDePersonas = prompt("Ingrese la cantidad de huespedes.");
          cantidadDePersonas = parseInt(cantidadDePersonas);
        } while (cantidadDePersonas == "" || isNaN(cantidadDePersonas) || cantidadDePersonas < 1);

        //Obtener y validar cantidad de dias de estadia.
        do {
          cantidadDeDiasDeEstadia = prompt("Ingrese la cantidad de días de estadia.");
          cantidadDeDiasDeEstadia = parseInt(cantidadDeDiasDeEstadia);
        } while (cantidadDeDiasDeEstadia == "" || isNaN(cantidadDeDiasDeEstadia) || cantidadDeDiasDeEstadia < 1);

        //Obtener y validar forma de pago.
        do {
          formaDePago = prompt("Ingrese la forma de pago: efectivo, tarjeta o QR.");
          formaDePago = formaDePago.toLowerCase();
        } while (!isNaN(formaDePago) || formaDePago != "efectivo" && formaDePago != "tarjeta" && formaDePago != "qr");


        //Obtener que huesped llevo la cantidad maxima de huespedes y dicha cantidad.
        if(contadorDeReserva == 1 || maximoCantidadDePersonas < cantidadDePersonas){
          maximoNombreHuesped = nombre;
          maximoCantidadDePersonas = cantidadDePersonas;
        }

        //
        if(contadorDeReserva == 1 || maximoDeDias < cantidadDeDiasDeEstadia){
          maximoDeDias = cantidadDeDiasDeEstadia;
          maximoDeDiasCantidadPersonas = cantidadDePersonas;
        }

        //Contar formas de pago
        switch (formaDePago) {
          case "qr":
            contadorQR++;
            break;
          case "efectivo":
            contadorEfectivo++;
            break;
          default:
            contadorTarjeta++;
            break;
        }

        //Acumular cantidad de dias para luego realizar el promedio
        acumuladorDeDias += cantidadDeDiasDeEstadia;
        console.log(acumuladorDeDias);

    //Confirmar si se desea seguir cargando datos
    respuesta = confirm("Desea continuar?");

  } while (respuesta);

  //Calcular el promedio
  promedio = acumuladorDeDias / contadorDeReserva;

  //Obtener forma de pago mas usada
  if (contadorQR > contadorEfectivo && contadorQR > contadorTarjeta){
    formaDePagoMasUsada = "qr";
  } else {
    if(contadorTarjeta > contadorEfectivo){
      formaDePagoMasUsada = "tarjeta";
    } else {
      formaDePagoMasUsada = "efectivo";
      }
    }
  }

  //Mostrar informacion por document write
  document.write("El huesped llamado " + maximoNombreHuesped + " trajo al mayor numero de huespedes: " + maximoCantidadDePersonas + "<br>");
  document.write("<br>");
  document.write("La forma de pago mas utilizada es: " + formaDePagoMasUsada + "<br>");
  document.write("<br>");
  document.write("El promedio de cantidad de días por reserva es " + promedio + "<br>");


}
