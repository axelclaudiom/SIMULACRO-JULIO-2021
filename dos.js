/*
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
  

  while(respuesta==true)
  {
    tipoBolsa = prompt("Ingrese el tipo de bolsa (Yerba, Azucar, Cafe)");
    cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);
    precioBolsa = prompt("Ingrese el precio de la bolsa");
    precioBolsa = parseInt(precioBolsa);
    switch(tipoBolsa)
    {
      case "yerba":
        cantidadYerba += cantidadBolsas;
        calculoYerba += cantidadBolsas * precioBolsa;
        /*if(yerbaBandera == false)
        {

        }*/
    
      break;        
      case "azucar":
        cantidadAzucar += cantidadBolsas;
        calculoAzucar += cantidadBolsas * precioBolsa;
        /*if(yerbaAzucar == false)
        {
          
        }*/
      break;
      case "cafe":
        cantidadCafe += cantidadBolsas;
        calculoCafe += cantidadBolsas * precioBolsa;
        /*if(yerbaCafe == false)
        {

        }*/
      break;
    }
    respuesta = confirm("Desea ingresar otro producto?");
  }
  
  // Calculo del que vale menos
  if(calculoYerba < calculoAzucar && calculoYerba < calculoCafe)
  {
    // yerba es la compra mas baja
    tipoMasBarato = "Yerba";
  }
  else
  {
    if(calculoAzucar < calculoCafe)
    {
      //azucar es la compra mas baja
      tipoMasBarato = "Azucar";
    }
    else
    {
      if(calculoCafe < calculoYerba)
      {
        // cafe es el mas chico
        tipoMasBarato = "Cafe";
      }
    }
  }
  // el que tiene mas bolsas
  if(cantidadYerba > cantidadAzucar && cantidadYerba > cantidadCafe)
  {
    //arena tiene mas bolsas    
    tipoMasBolsas = "Yerba";
  }
  else
  {
    if (cantidadAzucar > cantidadCafe )
    {
      // cal tiene mas bolsas
      tipoMasBolsas = "Azucar";
    }
    else
    {
      if(cantidadCafe > cantidadYerba)
      {
        // Cemento tiene mas bolsas
        tipoMasBolsas = "Cafe";
      }
    }
  }

  importeTotalBruto = calculoArena + calculoCemento + calculoCal;

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
