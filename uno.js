/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
    var contadorIngresos;
    var tipoDisco;
    var precioDisco;
    var cantidadUnidades;
    var marcaDisco;
    var capacidadDisco;
    var ssdMasBarato;
    var banderaPrecio;
    var unidadesSSDBarato;
    var marcaSSDBarato;
    var hddMasCaro;
    var capacidadHDDCaro;
    var unidadesHDDCaro;
    var acumuladorHDD;


    contadorIngresos = 0;
    ssdMasBarato = 0;
    banderaPrecio = false;
    unidadesSSDBarato = 0;
    hddMasCaro = 0;
    acumuladorHDD = 0;

    while(contadorIngresos < 5)
    {
        tipoDisco = prompt("Ingrese el tipo de disco (hdd,ssd, ssdm2");
        while(tipoDisco != "hdd" && tipoDisco != "ssd" && tipoDisco != "ssdm2")
        {
            tipoDisco = prompt("Error.. Ingrese el tipo de disco (hdd,ssd, ssdm2");
        }

        precioDisco = prompt("Ingrese el precio del disco");
        precioDisco = parseInt(precioDisco);
        while(isNaN(precioDisco) || precioDisco < 5000 || precioDisco > 18000)
        {
            precioDisco = prompt("Error.. Ingrese el precio del disco");
            precioDisco = parseInt(precioDisco);
        }

        cantidadUnidades = prompt("Ingrese la cantidad de unidades (del 1 al 50)");
        cantidadUnidades = parseInt(cantidadUnidades);
        while(isNaN(cantidadUnidades) || cantidadUnidades < 1 || precioDisco > 50)
        {
            cantidadUnidades = prompt("Error.. Ingrese la cantidad de unidades (del 1 al 50)");
            cantidadUnidades = parseInt(cantidadUnidades);
        }        

        marcaDisco = prompt("Ingrese la marca del disco(Seagate, Western Digital, Kingston");
        while(marcaDisco != "seagate" && marcaDisco != "Western Digital" && marcaDisco != "Kingston")
        {
            marcaDisco = prompt("Error.. Ingrese la marca del disco(Seagate, Western Digital, Kingston");
        }
        
        capacidadDisco = prompt("Ingrese la capacidad del disco (250gb, 500gb, 1tb, 2tb");
        while(capacidadDisco != "250gb" && capacidadDisco != "500gb" && capacidadDisco != "1tb" && capacidadDisco != "2tb")
        {
            capacidadDisco = prompt("Error.. Ingrese la capacidad del disco (250gb, 500gb, 1tb, 2tb");
        }

        contadorIngresos += 1;
        switch(tipoDisco)
        {
            case "hdd":
                if(precioDisco > hddMasCaro)
                {
                    hddMasCaro = precioDisco;
                    capacidadHDDCaro = capacidadDisco;
                    unidadesHDDCaro = cantidadUnidades;
                }
                contadorHDD += cantidadUnidades;
            break; 

            case "ssd":
                if(precioDisco < ssdMasBarato || banderaPrecio == false)
                {
                    banderaPrecio = true;
                    ssdMasBarato = precioDisco;
                    unidadesSSDBarato = cantidadUnidades;
                    marcaSSDBarato = marcaDisco;
                }
            break; 
                
            case "ssdm2":

            break; 
        }
    }
}