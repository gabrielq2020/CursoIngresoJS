/* Realizar el algoritmo que permita ingresar los datos de una compra de productos para la construccion, hasta que el cliente quiera:
cantidad de bolsas, precio por bolsa (más de cero ), tipo validar("arena";"cal";"cemento")
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) El importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro. */

function mostrar()
{
  var cantidadBolsas;
  var precioPorBolsa;
  var tipoBolsa;
  var respuesta = true;

  var acumuladorImporteFinalSinDescuento = 0;

  var acumuladorCantidadBolsas = 0;
  var importeFinalConDescuento = 0;
  var descuento;

  var acumuladorArena = 0;
  var acumuladorCal = 0;
  var acumuladorCemento = 0;
  var tipoMayorCantidadBolsas;

  var banderaTipoMasCaro = true;
  var precioTipoBolsaMasCaro;
  var tipoBolsaMasCaro;  

  do {
		do {
			cantidadBolsas = prompt("Ingresar cantidad de bolsas");
			cantidadBolsas = parseInt(cantidadBolsas);
    } while (isNaN(cantidadBolsas) || cantidadBolsas == "" || cantidadBolsas < 0);
    
    do {
			precioPorBolsa = prompt("Ingresar precio por bolsa");
			precioPorBolsa = parseInt(precioPorBolsa);
		} while (isNaN(precioPorBolsa) || precioPorBolsa == "" || precioPorBolsa < 0);

		do {
			tipoBolsa = prompt("Ingresar tipo de bolsa (arena; cal; cemento)");
			tipoBolsa = tipoBolsa.toLowerCase();
		} while (!isNaN(tipoBolsa) || tipoBolsa == "" || tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento");

    //a) El importe total a pagar , bruto sin descuento
    acumuladorImporteFinalSinDescuento += precioPorBolsa;

    //b) El importe total a pagar con descuento(solo si corresponde)
    acumuladorCantidadBolsas += cantidadBolsas;

    if (acumuladorCantidadBolsas > 0 && acumuladorCantidadBolsas <= 10 ) {
      descuento = 1;
    } else {
      if (acumuladorCantidadBolsas > 10 && acumuladorCantidadBolsas <= 30) {
        descuento = 0.85;
      } else {
        descuento = 0.75;
      }
    }

    //d) Informar el tipo con mas cantidad de bolsas
    switch (tipoBolsa) {
      case "arena":
        acumuladorArena += cantidadBolsas;
        break;
      case "cal":
        acumuladorCal += cantidadBolsas;
        break;    
      default:
        acumuladorCemento += cantidadBolsas;
        break;
    }

    //f) El tipo mas caro
    if (banderaTipoMasCaro == true || precioTipoBolsaMasCaro < precio) {
      banderaTipoMasCaro = false;
      precioTipoBolsaMasCaro = precio;
      tipoBolsaMasCaro = tipo;
    }
		
	} while (respuesta);

  //b) El importe total a pagar con descuento(solo si corresponde)
  importeFinalConDescuento = acumuladorImporteFinalSinDescuento * descuento;

  //d) Informar el tipo con mas cantidad de bolsas
  if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) {
    tipoMayorCantidadBolsas = "Arena";
  } else {
    if (acumuladorCal > cumuladorCemento) {
      tipoMayorCantidadBolsas = "Cal";
    } else {
      tipoMayorCantidadBolsas = "Cemento";
    }
  }

	document.write("El importe total a pagar , bruto sin descuento es " + acumuladorImporteFinalSinDescuento + "<br>");
	document.write("<br>");
	document.write("El importe total a pagar con descuento(solo si corresponde) es " + importeFinalConDescuento + "<br>");
	document.write("<br>");
	document.write("El tipo con mas cantidad de bolsas es " + tipoMayorCantidadBolsas + "<br>");
	document.write("<br>");
	document.write("El tipo mas caro es " + tipoBolsaMasCaro + "<br>");
	document.write("<br>");



}//Fin de funcion