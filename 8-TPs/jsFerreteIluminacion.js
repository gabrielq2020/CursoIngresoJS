/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLampara;
    var marca;
    var descuento;
    var importeFinal;
    var ingresosBrutos;

    descuento = 1
    cantidadLamparas = document.getElementById("Cantidad").value;
    precioLampara = 35;
    marca = document.getElementById("Marca").value;
    

    if (cantidadLamparas >= 6) {
        descuento = 0.5;
    } else {
        if (cantidadLamparas == 5){
            if (marca == "ArgentinaLuz"){
                descuento = 0.6;            
            } else {
                if (marca != "ArgentinaLuz") {
                    descuento = 0.7;
                } else {
                    if(cantidadLamparas == 4){
                     if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                        descuento = 0.75;
                    } else {
                        descuento = 0.80;
                    } 
                }
            }
        }
    }


    /*if(cantidadLamparas >= 6){                                                              //CASO A
        descuento = (cantidadLamparas * precioLampara) * 0.5;
    } else {
        if(cantidadLamparas == 5 && marca == "ArgentinaLuz"){                               //CASO B
            descuento = (cantidadLamparas * precioLampara) * 0.6;
        } else {
            if (cantidadLamparas == 5 && marca != "ArgentinaLuz") {                         //CASO C
                descuento = (cantidadLamparas * precioLampara) * 0.7;
            } else {
                if (cantidadLamparas == 4 && marca == "ArgentinaLuz" && marca == "FelipeLampras") {
                    descuento = (cantidadLamparas * precioLampara) * 0.75;                    
                } else {
                    if (cantidadLamparas == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){
                        descuento = (cantidadLamparas * precioLampara) * 0.8;
                    } else {
                        if(cantidadLamparas == 3 && marca == "ArgentinaLuz"){
                            descuento = (cantidadLamparas * precioLampara) * 0.85;
                        } else {
                            if (cantidadLamparas == 3 && marca == "FelipeLamparas"){
                                descuento = (cantidadLamparas * precioLampara) * 0.9;
                            } else {
                                if(cantidadLamparas == 3 && marca != "ArgentinaLuz" && marca != "FelipeLuz"){
                                    descuento = (cantidadLamparas * precioLampara) * 0.95;
                                }
                            }
                        }
                    }
                }
            }
        }*/
    }
 	

    document.getElementById("precioDescuento").value = descuento 
}
