/* Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total. */

function mostrar()
{
    //Variables datos
    var kilos;
    var precio;
    var tipo;
    var respuesta = true;

    //Variables a)
    var acumuladorImporteSinDescuento = 0;

    //Variables b)
    var acumuladorKilosTotal = 0;
    var descuento;
    var precioFinal;

    //Variables d)
    var banderaAlimentoMasCaro = true;
    var precioAlimentoMasCaro;
    var tipoAlimentoMasCaro;

    while(respuesta)
    {
      do {
        kilos = prompt("Ingresar los kilos que pesa el alimento");
        kilos = parseInt(kilos);
      } while (isNaN(kilos) || kilos == "" || kilos < 10 || kilos > 1000);

      do {
        precio = prompt("Ingresar precio del elemento");
        precio = parseInt(precio);
      } while (isNaN(precio) || precio == "" || precio < 0);
  
      do {
        tipo = prompt("Ingresar tipo de elemento: vegetal, animal o mezcla");
        tipo = tipo.toLowerCase();
      } while (!isNaN(tipo) || tipo == "" || tipo != "vegetal" && tipo != "animal" && tipo != "mezcla");

      //a) El importe total a pagar , bruto sin descuento
      acumuladorImporteSinDescuento += precio;

      //b) El importe total a pagar con descuento(solo si corresponde)
      acumuladorKilosTotal += kilos;

      //d) Informar el tipo de alimento más caro.
      if(banderaAlimentoMasCaro == true || precioAlimentoMasCaro < precio)
      {
        banderaAlimentoMasCaro = false;
        precioAlimentoMasCaro = precio;
        tipoAlimentoMasCaro = tipo;
      }

      //f) El promedio de precio por kilo en total.
      
      respuesta = confirm("Desea realizar otro ingreso?");
    }// Fin de While general

    //b) el importe total a pagar con descuento(solo si corresponde)
    if(acumuladorKilosTotal <= 100)
    {
      descuento = 1;
    } else
      {
        if(acumuladorKilosTotal > 100 && acumuladorKilosTotal < 300)
        {
          descuento = 0.85;
        } else
          {
            descuento = 0.75;
          }
      }

    precioFinal = acumuladorImporteSinDescuento * descuento;

    //f) El promedio de precio por kilo en total.
    promedioPrecioPorKilo = acumuladorKilosTotal / precioFinal;

    document.write("El importe total a pagar , bruto sin descuento es " + acumuladorImporteSinDescuento + "<br>");
    document.write("<br>");
    document.write("El importe total a pagar con descuento es " + precioFinal + "<br>");
    document.write("<br>");
    document.write("El tipo de alimento más caro es " + tipoAlimentoMasCaro + "<br>");
    document.write("<br>");
    document.write("El promedio de precio por kilo en total es " + promedioPrecioPorKilo + "<br>");
    document.write("<br>");


}//Fin de funcion

/* a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total. */


/*
//Forma sencilla para un maximo, si tengo contador
if(contador == 0 || alimentoMasCaro < precio) {
  alimentoMasCaro = precio;
  alimentoMasCaroTipo = tipo;
}
 */
