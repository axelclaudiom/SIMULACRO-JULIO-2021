/* faltan las validaciones nada mas
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var respuesta;
  var tipoBolsa;
  var cantidadBolsas;
  var precioBolsa;
  //var tipoConMasCantidad;
  var banderaMinimo;
  var tipoMasBarato;
  var compraMasBarata;
  var cantidadYerba;
  var descuento;
  var importeTotalBruto;
  var importeTotalDescuento;
  var cantidadAzucar;
  var cantidadYerba;
  var cantidadCafe;
  var calculoYerba;
  var calculoAzucar;
  var calculoCafe; 
  banderaMinimo == false;
  cantidadYerba = 0;
  cantidadAzucar = 0;
  cantidadCafe = 0;
  calculoYerba = 0;
  calculoAzucar = 0;
  calculoCafe = 0;
  respuesta = true;

  while(respuesta==true)
  {
    tipoBolsa = prompt("Ingrese el tipo de bolsa (Yerba, Azucar, Cafe)");
    while(tipoBolsa != "yerba" && tipoBolsa != "azucar" && tipoBolsa != "cafe")
    {
      tipoBolsa = prompt("Error.. Ingrese el tipo de bolsa (Yerba, Azucar, Cafe)");
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas) || cantidadBolsas < 0)
    {
      cantidadBolsas = prompt("Ingrese la cantidad de bolsas (Ingrese un numero mayor a 0)");
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    precioBolsa = prompt("Ingrese el precio de la bolsa");
    precioBolsa = parseInt(precioBolsa);
    while(isNaN(precioBolsa) || precioBolsa < 0)
    {
      precioBolsa = prompt("Ingrese el precio de la bolsa (mayor a 0)");
      precioBolsa = parseInt(precioBolsa);
    }
    
    subTotal = precioBolsa  * cantidadBolsas;

    switch(tipoBolsa)
    {
      case "yerba":
        cantidadYerba += cantidadBolsas;
        calculoYerba += cantidadBolsas * precioBolsa;
/*d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)*/
        /*if(cantidadYerba > maxCantidadBolsas)
        {
            maxCantidadBolsas = cantidadYerba;
            tipoConMasCantidad = "Yerba";
        }*/
        /*if(calculoYerba < compraMasBarata || banderaMinimo == false)
        {
          compraMasBarata = calculoYerba;
          tipoMasBarato = "Yerba";
          banderaMinimo == true;
        }*/
      break;        
      case "azucar":
        cantidadAzucar += cantidadBolsas;
        calculoAzucar += cantidadBolsas * precioBolsa;
        /*if(cantidadAzucar > maxCantidadBolsas)
        {
            maxCantidadBolsas = cantidadAzucar;
            tipoConMasCantidad = "Azucar";
        }*/
        
        /*if(calculoAzucar < compraMasBarata || banderaMinimo == false)
        {
          compraMasBarata = calculoAzucar;
          tipoMasBarato = "Azucar";
          banderaMinimo == true;
        }*/
      break;
      case "cafe":
        cantidadCafe += cantidadBolsas;
        calculoCafe += cantidadBolsas * precioBolsa;
        /*if(cantidadCafe > maxCantidadBolsas)
        {
            maxCantidadBolsas = cantidadCafe;
            tipoConMasCantidad = "Cafe";
        }*/
        
        /*if(calculoCafe < compraMasBarata || banderaMinimo == false)
        {
          compraMasBarata = calculoCafe;
          tipoMasBarato = "Cafe";
          banderaMinimo == true;
        }*/
      break;
    }
  
    // Condicion tipo de compra mas barata
    if(subTotal < compraMasBarata || banderaMinimo == false)
    {
      compraMasBarata = precioBolsa;
      tipoMasBarato = tipoBolsa;
      banderaMinimo == true;
    }
    respuesta = confirm("Desea ingresar otro producto?");
  }

  // el que tiene mas bolsas
  if(cantidadYerba > cantidadAzucar && cantidadYerba > cantidadCafe)
  {  
    tipoMasBolsas = "Yerba";
  }
  else
  {
    if (cantidadAzucar > cantidadCafe )
    {
      tipoMasBolsas = "Azucar";
    }
    else
    {
      if(cantidadCafe > cantidadYerba)
      {
        tipoMasBolsas = "Cafe";
      }
    }
  }

  importeTotalBruto = calculoAzucar + calculoYerba + calculoCafe;

  if(cantidadTotalBolsas > 30)
  {
    descuento = 25; 
  }  
  else
  {
    if(cantidadTotalBolsas > 10)
    {
      descuento = 15;
    }
  }

  importeTotalDescuento = importeTotalBruto * descuento / 100;

  document.write("El importe total bruto es: " +importeTotalBruto+"<br>");
  document.write("El importe Total con descuento es: " + importeTotalDescuento+ "<br>");
  document.write("El tipo de la compra mas barata es: " +tipoMasBarato+ "<br>");
  document.write("El tipo con mas bolsas es: " +tipoMasBolsas);
}
