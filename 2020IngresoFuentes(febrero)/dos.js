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
    //Datos
    var peso;
    var precio;
    var tipo;
    var respuesta = true;

    //Variables punto a)
    var acumuladorPeso = 0;
    var precioFinal;
    var descuento;

    //Variable punto d)
    var banderaAlimentoMasCaro = 0;
    var alimentoMasCaro;
    var precioAlimentoMasCaro;

    //Variables punto f)
    var acumuladorPrecio = 0;
    var promedioPrecioKilo;
    

    while (respuesta) {

      //Peso
      peso = prompt("Ingrese el peso");
      peso = parseInt(peso);

      while (isNaN(peso) || peso < 10 || peso > 1000 || peso == "") {
        peso = prompt("ERROR: Por favor ingrese un peso mayor a 10 y menor a 1000");
        peso = parseInt(peso);
      }

      //Precio
      precio = prompt("Ingrese el precio");
      precio = parseInt(precio);

      while (isNaN(precio) || precio < 0 || precio == "") {
        precio = prompt("ERROR: Por favor ingrese un precio mayor a 100 y menor a 10000");
        precio = parseInt(precio);
      }

      //Tipo
      tipo = prompt("Ingrese el tipo de producto: v para vegetal, a para animal o m para mezcla");
      tipo = tipo.toLowerCase();

      while (!isNaN(tipo) || tipo == "" || tipo != "v" && tipo != "a" && tipo != "m") {
        tipo = prompt("ERROR: Por favor ingrese el tipo de producto: v para vegetal, a para animal o m para mezcla");
        tipo = tipo.toLowerCase();
      }

      //Acumular los kilos para poder calcular despues el descuento
      acumuladorPeso += peso;

      // a) El importe total a pagar , bruto sin descuento
      //Acumular precio para despues poder aplicar descuento
      acumuladorPrecio += precio;
      
      //d) Informar el tipo de alimento más caro.
      if(banderaAlimentoMasCaro == 0) {
        banderaAlimentoMasCaro = 1
        precioAlimentoMasCaro = precio;
        alimentoMasCaro = tipo;
      }

      if(precioAlimentoMasCaro < precio){
        precioAlimentoMasCaro = precio;
        alimentoMasCaro = tipo;
      }

      respuesta = confirm("Desea continuar?");
    }

    switch (tipo) {
      case "v":
        tipo = "vegetal";
        break;
      case "a":
        tipo = "animal";
        break;

      default:
        tipo = "mezcla"
        break;
    }

    
    //b) el importe total a pagar con descuento(solo si corresponde)    
    if (acumuladorPeso < 100) {
      descuento = 1;
    } else {
      if (acumuladorPeso > 100 & acumuladorPeso < 300) {
        descuento = 0.85;
      } else {
        descuento = 0.75;
      }
    }

    precioFinal = precio * descuento;

    //f) El promedio de precio por kilo en total.
    promedioPrecioKilo = acumuladorPeso / acumuladorPrecio;
    console.log(promedioPrecioKilo);

  alert("El importe total a pagar sin descuento es: " + acumuladorPrecio);

  alert("El importe total a pagar con descuento es: " + precioFinal);

  alert("El alimento mas caro es: " + alimentoMasCaro);
  
  alert("El promedio de precio por kilo en total es: " + promedioPrecioKilo);

/*     El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo de alimento más caro.
  f) El promedio de precio por kilo en total. */
}
