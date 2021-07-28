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
   var productosIngresados;
   var tipohdd;
   var precio;
   var cantidadUnidades;
   var marca;
   var capacidad;
   var banderaMinimo;
   var ssdBaratoPrecio;
   var ssdBaratoMarca;
   var ssdBaratoUnidades;
   var maxPrecioHDD;
   var maxCapacidadHDD;
   var maxUnidadesHDD;
   var maxMarcaHDD;
   var contadorHDD;
   banderaMinimo = false;
   productosIngresados = 0;
   ssdBaratoPrecio = 0;
   maxPrecioHDD = 0;
   maxCapacidadHDD = 0;
   maxUnidadesHDD = 0;
   contadorHDD = 0;

	while(productosIngresados < 5)
   {
      tipohdd = prompt("Ingrese tipo de producto (hdd, ssd, ssdm2)");
      while(tipohdd != "hdd" && tipohdd != "ssd" && tipohdd != "ssdm2")
      {
         tipohdd = prompt("Error.. Ingrese tipo de producto (hdd, ssd, ssdm2)");
      }

      precio = prompt("Ingrese precio (entre 5000 y 18000)");
      precio = parseInt(precio);
      while(isNaN(precio) || precio < 5000 || precio > 18000)
      {
         precio = prompt("Error.. Ingrese precio (entre 5000 y 18000)");
         precio = parseInt(precio);
      }

      cantidadUnidades = prompt("Ingrese cantidad de unidades (entre 1 y 50) ");
      cantidadUnidades = parseInt(cantidadUnidades);
      while(isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 50)
		{
			cantidadUnidades = prompt("Error. Ingrese la cantidad de unidades  (entre 1 y 50)");
			cantidadUnidades = parseInt(cantidadUnidades);
		} 

      marca = prompt("Ingrese la marca del producto(“Seagate”, “Western Digital”, “Kingston”)");
      while(marca != "Seagate" && marca != "Western Digital" && marca != "Kingston")
      {
         marca = prompt("Error.. Ingrese la marca del producto(“Seagate”, “Western Digital”, “Kingston”)"); 
      }

      capacidad = prompt("Ingrese capacidad (validar 250Gb, 500Gb, 1Tb, 2Tb)");
      while(capacidad != "250gb" && capacidad != "500gb" && capacidad != "1tb" && capacidad != "2tb")
      {
         capacidad = prompt("error.. Ingrese capacidad (validar 250Gb, 500Gb, 1Tb, 2Tb)");
      }
      productosIngresados += 1;
      console.log(tipohdd);
      //a) Del más barato de los SSD, la cantidad de unidades y marca.
      if(tipohdd == "ssd")
      {
         console.log("aca entra1");
         if(precio < ssdBaratoPrecio || banderaMinimo == false)
         {
            console.log("aca entra");
            ssdBaratoUnidades = cantidadUnidades;
            ssdBaratoMarca = marca;
            ssdBaratoPrecio = precio;
            banderaMinimo == true;
         }
      }
      else
      {
         //b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades disponibles. 
         if(tipohdd == "hdd")
         {
            if(precio > maxPrecioHDD)
            {
               maxUnidadesHDD = cantidadUnidades;
               maxCapacidadHDD = capacidad;
               maxMarcaHDD = marca;
               maxPrecioHDD = precio;
            }
            contadorHDD += cantidadUnidades;
         }
      }

   }

   document.write("El SSD mas barato tiene: " +ssdBaratoUnidades + " Unidades y la marca es: " +ssdBaratoMarca+ "<br>");
   document.write("El HDD de mayor precio es de la marca: " +maxMarcaHDD+" la capacidad de almacenamiento es: " +maxCapacidadHDD+" y tiene " +maxUnidadesHDD+" unidades disponibles. <br>");
   document.write("Hay "+contadorHDD+ "Unidades disponibles de hdd en total.");
}
