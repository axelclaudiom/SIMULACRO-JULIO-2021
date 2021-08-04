/* faltan las validaciones nada mas
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar. fuera while
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar. fuera while
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento. fuera while
b)	El importe total a pagar con descuento (solo si corresponde) fuera while
c)	Informar el tipo con más cantidad de bolsas. fuera while
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento) dentro while
*/

function mostrar()
{
    var respuesta;
    var tipoIngresado;
    var cantidadBolsas;
    var precioBolsa;
    var cantidadYerba;
    var cantidadAzucar;
    var cantidadCafe;
    var calculoAzucar;
    var calculoCafe;
    var calculoYerba;
    var calculoCompraBarata;
    var compraMasBarata;
    var banderaBarato;
    var acumuladorBolsas;
    var cantidadTotalbolsas;
    var descuento;
    var importeTotalBruto;
    var importeTotalDescuento;
    var tipoMasBolsas;

    respuesta = true;
    cantidadYerba = 0;
    cantidadAzucar = 0;
    cantidadCafe = 0;
    calculoAzucar = 0;
    calculoCafe = 0;
    calculoYerba = 0;
    banderaBarato = false;
    acumuladorBolsas;
    descuento = 0;

    while(respuesta == true)
    {
        tipoIngresado = prompt("Ingrese tipo de producto  (Yerba, Azúcar, Café)");
        while(tipoIngresado != "Yerba" && tipoIngresado != "Azucar" && tipoIngresado != "Cafe")
        {
            tipoIngresado = prompt("Error.. Ingrese tipo de producto  (Yerba, Azúcar, Café)");
        }

        cantidadBolsas = prompt("Ingrese cantidad de bolsas (Mayor a 0)");
        cantidadBolsas = parseInt(cantidadBolsas);
        while(isNaN(cantidadBolsas) || cantidadBolsas < 0)
        {
            cantidadBolsas = prompt("Error.. Ingrese cantidad de bolsas (Mayor a 0)");
            cantidadBolsas = parseInt(cantidadBolsas);
        }
        precioBolsa = prompt("Ingrese el precio de la bolsa(Mayor a 0)");
        precioBolsa = parseInt(precioBolsa);
        while(isNaN(precioBolsa) || precioBolsa < 0)
        {
            precioBolsa = prompt("Error.. Ingrese el precio de la bolsa(Mayor a 0)");
            precioBolsa = parseInt(precioBolsa);
        }
        
        calculoCompraBarata = precioBolsa * cantidadBolsas;

        switch(tipoIngresado)
        {
            case "Azucar":
                cantidadAzucar += cantidadBolsas;
                calculoAzucar += precioBolsa * cantidadBolsas;
            break;

            case "Cafe":
                cantidadCafe += cantidadBolsas;
                calculoCafe += precioBolsa * cantidadBolsas;
            break;

            case "Yerba":
                cantidadYerba += cantidadBolsas;
                calculoYerba += precioBolsa * cantidadBolsas;
            break;
        }

        if(calculoCompraBarata < compraMasBarata || banderaBarato == false)
        {
            compraMasBarata = calculoCompraBarata;
            banderaBarato = true;
            tipoCompraMasBarata = tipoIngresado;
        }

        respuesta = confirm("Desea continuar?");
    }

   /* Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar. fuera while
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar. fuera while*/
    cantidadTotalbolsas = cantidadAzucar + cantidadCafe + cantidadYerba;
    if(cantidadTotalbolsas > 5)
    {
        descuento = 10;
    }
    else
    {
        if(cantidadTotalbolsas > 10)
        {
            descuento = 15;
        }
    }

    // a)	El importe total a pagar bruto, sin descuento. fuera while
    importeTotalBruto = calculoAzucar + calculoCafe + calculoYerba;
    document.write("El importe total a pagar bruto es:" + importeTotalBruto + "<br>");
    
    //b)	El importe total a pagar con descuento (solo si corresponde)
    if(descuento > 0)
    {
        importeTotalDescuento = importeTotalBruto+(importeTotalBruto * descuento/100);
        document.write("El importe total con descuento es: " + importeTotalDescuento + "<br>");
    }

    // c)	Informar el tipo con más cantidad de bolsas. fuera while
    if(cantidadYerba > cantidadAzucar && cantidadYerba > cantidadCafe)
    {
        tipoMasBolsas = "Yerba";
    }
    else
    {
        if(cantidadAzucar > cantidadCafe)
        {
            tipoMasBolsas = "Azucar";
        }
        else
        {
            tipoMasBolsas = "Cafe";
        }
    }
    document.write("El tipo con mas cantidad de bolsas es: " + tipoMasBolsas + "<br>");

    // d)	El tipo de la compra más barata. (sobre el Bruto sin descuento) dentro while
    document.write("El tipo de la compra mas barata es: " + tipoCompraMasBarata);
}